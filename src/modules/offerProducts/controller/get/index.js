import { GET_OFFER_PRODUCTS, GET_OFFER_PRODUCTS } from '../../queries/get.js';
import client from '../../../../utils/apolloClient.js';


export const getOfferProducts = async (shopId, userId = null) => {
  if (userId) {
    userId = Number(userId);
  }
  try {
    const variables = {
      filter: {
        shopId: Number(shopId),
        userId
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
