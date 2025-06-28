// src/modules/cart/controller/add_/index.js
import client from '../../../../utils/client.js';
import { ADD_TO_CART } from '../../mutations/add.js';

// Adds a product to the cart or updates quantity
export const addToCart = async ({ productId, shopId, userId, update, quantity }) => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_CART, // ✅ correct key
      variables: {
        productId,
        shopId,
        userId,
        update,
        quantity
      }
    });
    return data.Cart;
  } catch (error) {
    console.error('Cart Add Error:', error.message || error);
    throw error;
  }
};

;
