import client, { gql } from '../../../utils/apolloClient.js';

export const GET_OFFER_PRODUCTS = gql`
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
    id
    description
    discount
    isAddedToCart {
      inCart
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
    Specifications {
      specification
      value
    }
  }
}`;

export const GET_OFFER_PRODUCTS_BASIC_DETAILS = gql`
  query GetofferBasicDetailsProducts($filter: offer) {
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
    discount
    featureImage
    isOnline
    lastUpdate
    noStock
    minStock
    offerends
    prize
    productId
    publish
    tax
    shopId
  }
}`;
export const getOfferProductsController = async (shopId, limit = null) => {
  if (!shopId) throw new Error('shopId is required');
  try {
    const filter = {
      shopId: Number(shopId),
    };
    if (limit) filter.limit = 5;

    const response = await client.query({
      query: GET_OFFER_PRODUCTS_BASIC_DETAILS,
      variables: {
        filter,
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