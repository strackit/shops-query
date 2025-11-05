import client, { gql } from '../../../utils/apolloClient.js';

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
export const fetchProducts = async ({ shopId = null, productId = null, categoryId = null, byProductId = false }) => {
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

  if (!variables.filter.shopId && !variables.filter.id && !variables.filter.productId) {
    console.error("Please provide valid shopId or productId");
    return [];
  }

  try {
    const response = await client.query({
      query: GET_PRODUCTS,
      variables,
    });

    return productId ? response?.data?.products?.[0] : response?.data?.products ?? [];
  } catch (error) {
    console.error("Failed to fetch products:", error.message || error);
    return productId ? null : [];
  }
};
