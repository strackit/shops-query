// src/modules/cart/controller/add_/index.js
import client, { gql } from '../../../../utils/client.js';
import { UPDATE_CART } from '../../mutations/add.js';

// Adds a product to the cart or updates quantity
const addToCart = async ({ productId, shopId, userId, quantity }) => {
  try {
    const variables = {
      productId: Number(productId),
      shopId: Number(shopId),
      userId: Number(userId),
      update: true,
      quantity: Number(quantity),
    };

    const data = await client.request(UPDATE_CART, variables);
    return data.Cart;
  } catch (error) {
    console.error('Cart Add Error:', error.message || error.response?.errors || error);
    throw error;
  }
};

export { addToCart };
