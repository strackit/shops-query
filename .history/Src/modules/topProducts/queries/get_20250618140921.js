import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const GET_TOP_PRODUCTS = gql`
  query Query($filter: top) {
  topProducts(filter: $filter) {
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
      productId
      image
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

export const fetchTopProducts = async (shopI) => {
  try {
    const { data } = await client.query({
      query: GET_TOP_PRODUCTS,
    });
    return data.topProducts;
  } catch (error) {
    console.error(' Error fetching top products:', error.message || error);
    throw error;
  }
};