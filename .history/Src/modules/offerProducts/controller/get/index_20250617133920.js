import { fetchOfferProducts } from '../../queries/get.js';
import client from '../../../../utils'
export const getOfferProductsController = async () => {
  try {
      const response = await client.request(GET_OFFER_PRODUCTS, {
        filter: { shopId: Number(shopId) },
      });
  
      return response.offerProducts;
    } catch (error) {
      console.error('❌ Error in controller:', error.message);
      throw error;
    }
};
