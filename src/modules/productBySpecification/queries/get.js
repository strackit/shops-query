import { fetchProducts } from "../../products/queries/get.js";
import { fetchProductsByCategory } from "../../productByCategory/queries/get.js";

/**
 * Fetch products filtered by category names, shop, pagination, or product ID.
 *
 * - When productId is provided, uses getAllProducts (fetchProducts) to get that specific product
 * - When category names are provided, uses productsByCategory to filter by categories
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
    // If productId is provided, use getAllProducts (fetchProducts)
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

    // If category names are provided, use productsByCategory
    if (masterCategory || secondaryCategory) {
      return await fetchProductsByCategory(
        masterCategory,
        shopId,
        secondaryCategory,
        offset,
        limit
      );
    }

    // If no filters provided, return empty array or throw error
    console.warn("No filters provided to fetchProductsByFilters");
    return [];
  } catch (error) {
    console.error("Error fetching products by filters:", error.message);
    throw error;
  }
};
