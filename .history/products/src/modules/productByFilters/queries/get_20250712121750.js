import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_FILTERS = gql`
  query Query($filter: filterKeys) {
  productByFilters(filter: $filter) {
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
    productImage {
      image
      productId
      id
    }
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

export const fetchProductsByFilters = async (filters) => {
  try {
    const response = await client.query({
      query: GET_PRODUCTS_BY_FILTERS,
      variables: { filters },
    });

    return response?.data?.productByFilters ?? [];
  } catch (error) {
    console.error('❌ Error fetching products by filters:', error.message || error);
    throw error;
  }
};