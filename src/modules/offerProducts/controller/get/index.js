import { GET_OFFER_PRODUCTS, GET_OFFER_PRODUCTS_BASIC_DETAILS } from '../../queries/get.js';
import client from '../../../../utils/apolloClient.js';


export const getOfferProducts = async (shopId, userId = null, limit = null) => {
  if (userId) {
    userId = Number(userId);
  }
  try {
    const filter = {
      shopId: Number(shopId),
      userId
    };
    if (limit) {
      filter.limit = Number(limit);
      filter.offset = 0;
    }

    const variables = {
      filter
    };
    const response = await client.query({
      query: GET_OFFER_PRODUCTS_BASIC_DETAILS,
      variables,
    });

    return response?.data?.offerProducts ?? [];
  } catch (error) {
    console.error('Error in controller:', error.message || error);
    throw error;
  }
};


export const getOfferProductsController = async (shopId) => {
  try {
    const variables = {
      filter: {
        shopId: Number(shopId),
      },
    };

    const response = await client.query({
      query: GET_OFFER_PRODUCTS,
      variables,
    });

    return response?.data?.offerProducts ?? [];
  } catch (error) {
    console.error('Error in controller:', error.message || error);
    throw error;
  }
};
