import { GET_OFFER_PRODUCTS,fetchOfferProducts } from '../../queries/get.js';
import client from '../../../../utils/client.js'

export const getOfferProductsController = async (shopId,) => {
  try {
    const response = await client.query({
      query: GET_OFFER_PRODUCTS,
      variables: {
        filter: {
          shopId: Number(shopId),
          userId: Number(userId), 
        },
      },
    });

    return response?.data?.offerProducts ?? [];
  } catch (error) {
    console.error('❌ Error in controller:', error.message || error);
    throw error;
  }
};
