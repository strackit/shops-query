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

export const fetchOfferProducts = async (shopId) => {
  if (!shopId) throw new Error("⚠️ shopId is required");

  try {
    const data = await client.request(GET_OFFER_PRODUCTS, {
      filter: {
        shopId: shopId, // ✅ Pass shopId here
      },
    });
    return data.offerProducts;
  } catch (error) {
    console.error(
      'Controller failed to fetch offer products:',
      error.response?.errors || error.message || error
    );
    throw error;
  }
};
