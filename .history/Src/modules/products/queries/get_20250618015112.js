import client, { gql } from '../../../utils/client.js';

export const GET_PRODUCTS = gql`
  query GetProducts($filter: productfilter) {
  products(filter: $filter) {
    productImage {
      
    }
    wishList {
      like
    }
    views
    viewPrice
    tax
    specification
    shopId
    seoKeyword
    quantity {
      quantity
    }
    publish
    productId
    productCategoryId
    prize
    otherInformation
    offerends
    number
    noStock
    name
    minStock
    mastercategory
    localName
    lastUpdate
    isOnline
    isAddedToCart {
      inCart
    }
    id
    hsnCode
    howToUse
    featureImage
    dnp
    discount
    description
    categoryId
    category
    barcode
    addedon
    Specifications {
      value
      specification
    }
  }
}
`;

export const fetchProducts = async (shopId) => {
  const variables = {
    filter: {
      shopId: Number(shopId),
    },
  };
  console.log('📦 Fetching products with variables:', variables);

  try {
    const response = await client.query({
      query: GET_PRODUCTS,
      variables : ,
    });

    return response?.data?.products ?? [];
  } catch (error) {
    console.error('❌ Failed to fetch products:', error.message || error);
    return [];
  }
};
