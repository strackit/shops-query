import client, { gql } from "../../../utils/apolloClient.js";
import { fetchProductsByCategory } from "../../productByCategory/queries/get.js";

export const GET_PRODUCTS = gql`
  query GetProducts($filter: productfilter) {
    products(filter: $filter) {
      id
      number
      name

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
      Specifications {
        specification
        value
      }
      Varients {
        varientId
        productId
      }
      quantity {
        quantity
      }
      spec {
        SpecificationMastername
        value {
          varientId
          products {
            productId
            value
            qty
          }
        }
      }
      specification
      addedon
      barcode
      category
      categoryId
      description
      hsnCode
      howToUse
      dnp
      discount
      featureImage
      isOnline
      lastUpdate
      localName
      mastercategory
      noStock
      minStock
      offerends
      otherInformation
      prize
      productCategoryId
      productId
      publish
      tax
      viewPrice
      views
      shopId
      seoKeyword
    }
  }
`;
export const fetchProducts = async ({
  shopId = null,
  productId = null,
  categoryId = null,
  byProductId = false,
}) => {
  const variables = { filter: {} };

  if (shopId) {
    variables.filter.shopId = Number(shopId);
  }

  if (categoryId) {
    variables.filter.categoryId = Number(categoryId);
  }

  if (productId) {
    if (byProductId) {
      variables.filter.productId = Number(productId);
    } else {
      variables.filter.id = Number(productId);
    }
  } else if (shopId) {
    variables.filter.shopId = Number(shopId);
  } else {
    console.error("Either shopId or productId must be provided");
    return [];
  }

  if (
    !variables.filter.shopId &&
    !variables.filter.id &&
    !variables.filter.productId
  ) {
    console.error("Please provide valid shopId or productId");
    return [];
  }

  try {
    const response = await client.query({
      query: GET_PRODUCTS,
      variables,
    });

    return productId
      ? response?.data?.products?.[0]
      : response?.data?.products ?? [];
  } catch (error) {
    console.error("Failed to fetch products:", error.message || error);
    return productId ? null : [];
  }
};

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

    // If only shopId is provided, fetch all products for the shop
    if (shopId) {
      const products = await fetchProducts({ shopId });
      return products;
    }

    // If no filters provided, return empty array or throw error
    console.warn("No filters provided to fetchProductsByFilters");
    return [];
  } catch (error) {
    console.error("Error fetching products by filters:", error.message);
    throw error;
  }
};