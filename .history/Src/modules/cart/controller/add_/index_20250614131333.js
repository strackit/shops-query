import client from '../../../../client.js';
import { UPDATE_CART } from '../../mutations/add.js';

export const addToCart = async ({ productId, shopId, userId, update = false, quantity }) => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_CART,
      variables: {
        productId,
        shopId,
        userId,
        update,
        quantity,
      },
    });

    return data.Cart;
  } catch (error) {
    console.error('Cart Add Error:', error.message || error);
    throw error;
  }
};