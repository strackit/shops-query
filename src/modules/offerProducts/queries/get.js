import client, { gql } from '../../../utils/apolloClient.js';

export const GET_OFFER_PRODUCTS = gql`
  query GetofferProducts($filter: offer) {
  offerProducts(filter: $filter) {
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
}`;

export const GET_OFFER_PRODUCTS_BASIC_DETAILS = gql`
  query GetofferBasicDetailsProducts($filter: offer) {
  offerProducts(filter: $filter) {
    id
    isAddedToCart {
      inCart
    }
    name
    prize
    discount
    publish
    tax
    wishList {
      like
    }
    productImage {
      id
      image
      productId
    }
    featureImage
    description
    isOnline
    noStock
  }
}`;

export const getOfferProductsController = async (shopId) => {
  if (!shopId) throw new Error('shopId is required');

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
    console.error(
      'Controller failed to fetch offer products:',
      error.message || error
    );
    throw error;
  }
};
