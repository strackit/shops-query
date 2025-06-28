import client from '../../../../utils/client.js';
import { gql } from '../../../../utils/client.js';
import {UPDATE_OR_DELETE_CART} from '../../mutations/

// ✅ Remove from cart controller
export const removeFromCart = async (userId, productId, quantity, shopId, Delete) => {
  try {
    const { data } = await client.mutate({
      mutation: REMOVE_FROM_CART,
      variables: {
        userId: Number(userId),
        productId: Number(productId),
        shopId: Number(shopId),
        delete: Delete,
      },
    });

    console.log(' Removed from Cart:', data.removeFromCart);
    return data.removeFromCart;
  } catch (error) {
    console.error(' Error removing from cart:', error.message);
    throw error;
  }
};
