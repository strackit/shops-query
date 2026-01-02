import client, { gql } from "../../../utils/apolloClient.js";
import { getMasterCategories } from "../../masterCategories/queries/get.js";
import { getSecondaryCategories } from "../../SecondaryCategories/queries/index.js";
import { fetchProducts } from "../../products/queries/get.js";
import { fetchProductsByCategory } from "../../productByCategory/queries/get.js";

const PRODUCTS_BY_FILTERS = gql`
  query ProductsByFilters($filter: productfilter) {
    products(filter: $filter) {
      id
      productId
      name
      description
      prize
      discount
      featureImage
      wishList {
        like
      }
      isAddedToCart {
        inCart
      }
      productImage {
        id
        image
        productId
      }
    }
  }
`;

/**
 * Helper function to resolve master category name to master category ID
 * @param {number} shopId - Shop ID
 * @param {string} categoryName - Master category name
 * @returns {Promise<number|null>} Master Category ID or null if not found
 */
const resolveMasterCategoryId = async (shopId, categoryName) => {
  try {
    const categories = await getMasterCategories(shopId);
    const match = categories.find(
      (cat) => cat.category.toLowerCase() === categoryName.toLowerCase()
    );
    return match?.id ? Number(match.id) : null;
  } catch (error) {
    console.error(
      `Error resolving master category "${categoryName}":`,
      error.message
    );
    return null;
  }
};

/**
 * Helper function to resolve secondary category name to ID
 * @param {number} shopId - Shop ID
 * @param {number} masterCategoryId - Master category ID
 * @param {string} categoryName - Secondary category name
 * @returns {Promise<number|null>} Category ID or null if not found
 */
const resolveSecondaryCategoryId = async (
  shopId,
  masterCategoryId,
  categoryName
) => {
  try {
    const categories = await getSecondaryCategories(shopId, masterCategoryId);
    const match = categories.find(
      (cat) => cat.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (match) {
      return match?.id ? Number(match.id) : null;
    } else {
      return null;
    }
  } catch (error) {
    console.error(
      `Error resolving secondary category "${categoryName}":`,
      error.message
    );
    return null;
  }
};

/**
 * Fetch products filtered by category names, shop, pagination, or product ID.
 * When productId is provided, delegates to the products query which supports ID filtering.
 *
 * @param {Object} params
 * @param {number} params.shopId - Required: Shop ID
 * @param {number|string} [params.productId] - Optional: Product ID (database ID number or productId string like "CR9969")
 * @param {string} [params.masterCategory] - Optional: Master category name (e.g., "Men")
 * @param {string} [params.secondaryCategory] - Optional: Secondary category name (e.g., "Crew Neck")
 * @param {number} [params.offset] - Optional: Pagination offset
 * @param {number} [params.limit] - Optional: Pagination limit
 * @returns {Promise<Array>} Array of products
 */
export const fetchProductsByFilters = async ({
  productId = null,
  masterCategory = null,
  secondaryCategory = null,
  offset = null,
  limit = null,
  shopId = null,
}) => {
  try {
    // Special handling: If productId is provided, use the products query instead
    // because productfilter type doesn't support ID filtering
    if (productId) {
      // Determine if we're filtering by database ID (number) or productId field (string)
      const byProductId = typeof productId === "string";

      const product = await fetchProducts({
        shopId,
        productId,
        byProductId, // true for string IDs like "CR9969", false for database IDs like 9969
      });
      // fetchProducts returns a single product or null, but we need to return an array
      return product ? [product] : [];
    }

    // Special handling: If pagination is requested with category names,
    // use productsByCategory query instead because products query doesn't support
    // pagination with productfilter type
    if (
      (masterCategory || secondaryCategory) &&
      (limit !== null || offset !== null)
    ) {
      return await fetchProductsByCategory(
        masterCategory,
        shopId,
        secondaryCategory,
        offset,
        limit
      );
    }

    const filter = {};

    // Add shopId if provided
    if (shopId) {
      filter.shopId = Number(shopId);
    }

    // Add master category if provided (resolve name to ID)
    // NOTE: Only add masterCategoryId if NO secondary category will be used
    // because the products query doesn't support both master + secondary ID filtering
    let resolvedMasterCategoryId = null;
    if (masterCategory && shopId) {
      resolvedMasterCategoryId = await resolveMasterCategoryId(
        shopId,
        masterCategory
      );
      if (!resolvedMasterCategoryId) {
        console.warn(
          `Master category "${masterCategory}" not found for shopId ${shopId}`
        );
      }
    }

    // Add secondary category if provided (resolve name to ID)
    let resolvedSecondaryCategoryId = null;
    if (secondaryCategory && shopId && resolvedMasterCategoryId) {
      resolvedSecondaryCategoryId = await resolveSecondaryCategoryId(
        shopId,
        resolvedMasterCategoryId,
        secondaryCategory
      );
      if (!resolvedSecondaryCategoryId) {
        console.warn(
          `Secondary category "${secondaryCategory}" not found for shopId ${shopId}`
        );
      }
    }

    // Apply resolved IDs to filter
    // Priority: If secondary category is resolved, ONLY use categoryId (not masterCategoryId)
    // because the GraphQL schema doesn't support both together
    if (resolvedSecondaryCategoryId) {
      filter.categoryId = resolvedSecondaryCategoryId;
    } else if (resolvedMasterCategoryId) {
      filter.masterCategoryId = resolvedMasterCategoryId;
    }

    // Add pagination if provided
    if (offset !== null) {
      filter.offset = Number(offset);
    }

    if (limit !== null) {
      filter.limit = Number(limit);
    }

    // Execute the query
    const { data } = await client.query({
      query: PRODUCTS_BY_FILTERS,
      variables: { filter },
    });

    return data?.products || [];
  } catch (error) {
    console.error("Error fetching products by filters:", error.message);
    throw error;
  }
};
