// src/modules/offerProducts/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_OFFER_PRODUCTS = gql`
  query OfferProducts($filter: offer) {
  offerProducts(filter: $filter) {
    Specifications {
      specification
      value
    }
    addedon
    barcode
    category
    categoryId
    discount
    description
    dnp
    howToUse
    featureImage
    hsnCode
    id
    isAddedToCart {
      inCart
    }
    isOnline
    lastUpdate
    localName
    mastercategory
    minStock
    name
    noStock
    number
    offerends
    otherInformation
    prize
    productCategoryId
    productId
    productImage {
      id
      image
      productId
    }
    publish
    quantity {
      quantity
    }
    seoKeyword
    shopId
    specification
    tax
    viewPrice
    views
    wishList {
      like
    }
  }
}
`;

export const fetchOfferProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_OFFER_PRODUCTS,
    });
    return data.offerProducts;
  } catch (error) {
    console.error('❌ Error fetching offer products:', error);
    throw error;
  }
};
