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
    variantOf
    variantOptions {
      name
      options {
        productId
        value
      }
    }    
  }
}
`;

export const GET_ALL_PRODUCTS = gql`
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
    addedon
    description
    dnp
    discount
    featureImage
    isOnline
    noStock
    minStock
    offerends
    prize
    productId
    tax
    views 
  }
}
`;

export const fetchallProducts = async (shopId, start = null, userId = null, end = null ) => {
  const variables = { filter: {} };
  if (shopId) {
    variables.filter.shopId = Number(shopId);
  }
    if (userId) {
    variables.filter.userId = Number(userId);
  }
    if (start) {
    variables.filter.start = Number(start);
  }
    if (end) {
    variables.filter.end = Number(end);
  }
  try {
    const response = await client.query({
      query: GET_ALL_PRODUCTS,
      variables,
    });
    return response?.data?.products ?? [];
  } catch (error) {
    console.error("Failed to fetch products:", error.message || error);
    return [];
  }
};

export const fetchProducts = async ({ shopId = null, productId = null, categoryId = null, masterCategoryId = null, start = null, userId = null, end = null, byProductId = false }) => {
  const variables = { filter: {} };

  if (shopId) {
    variables.filter.shopId = Number(shopId);
  }

  if (categoryId) {
    variables.filter.categoryId = Number(categoryId);
  }

  if (masterCategoryId) {
    variables.filter.masterCategoryId = Number(masterCategoryId);
  }

  if (start) {
    variables.filter.start = Number(start);
  }

  if (end) {
    variables.filter.end = Number(end);
  }

  if (userId) {
    variables.filter.userId = Number(userId);
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