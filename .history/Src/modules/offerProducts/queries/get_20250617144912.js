//src/modules/offerProducts/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_OFFER_PRODUCTS = gql`
  query GetofferProducts($filter: offer) {
  offerProducts(filter: $filter) {
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
  }
}

`;

export const getOfferProductsController = async (shopId) => {
  try {
    const response = await client.query({
      query: GET_OFFER_PRODUCTS,
      variables: {
        filter: {
          shopId: Number(shopId),
        },
      },
    });

    return response?.data?.offerProducts ?? [];
  } catch (error) {
    console.error('❌ Error in controller:', error.message || error);
    throw error;
  }
};
