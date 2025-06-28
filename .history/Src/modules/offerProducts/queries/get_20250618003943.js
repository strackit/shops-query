//src/modules/offerProducts/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

export const GET_OFFER_PRODUCTS = gql`
  query Orders($filter: offer) {
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

export const fetchOfferProducts = async (shopId) => {
  if (!shopId) throw new Error('⚠️ shopId is required');

  try {
    const response = await client.query({
      query: GET_OFFER_PRODUCTS,
      variables: {
        filter: {
          shopId: Number(shopId), 
          userId:// ensure numeric
        },
      },
    });

    return response?.data?.offerProducts ?? [];
  } catch (error) {
    console.error(
      '❌ Controller failed to fetch offer products:',
      error.message || error
    );
    throw error;
  }
};
