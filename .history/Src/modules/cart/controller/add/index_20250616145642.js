// src/modules/cart/controller/add_/index.js

import client from '../../../../utils/client.js';
import { ADD_TO_CARTCART } from '../../mutations/add.js';

/**
 * Adds a product to the cart or updates its quantity.
 * @param {Object} params - Cart data.
 * @param {number} params.productId
 * @param {number} params.shopId
 * @param {number} params.userId
 * @param {number} params.quantity
 * @returns {Promise<Object|null>}
 */
export const addToCart = async ({ productId, shopId, userId, quantity }) => {
  try {
    const variables = {
      productId: Number(productId),
      shopId: Number(shopId),
      userId: Number(userId),
      update: true,
      quantity: Number(quantity),
    };

    const data = await client.request(UPDATE_CART, variables);
    return data?.Cart ?? null;
  } catch (error) {
    console.error('Cart Add Error:', error.response?.errors || error.message || error);
    throw error;
  }
};
