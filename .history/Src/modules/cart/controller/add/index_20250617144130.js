// src/modules/cart/controller/add_/index.js

import client from '../../../../utils/client.js';
import { ADD_TO_CART } from '../../mutations/add.js';

/**
 * Adds a product to the cart or updates its quantity.
 * @param {Object} params - Cart data.
 * @param {number} params.productId
 * @param {number} params.shopId
 * @param {number} params.userId
 * @param {number} params.quantity
 * @returns {Promise<Object|null>}
 */
export const addToCart = async ({ productId, shopId, userId, update, quantity }) => {
  try {
    const variables = { productId, shopId, userId, update, quantity };

    const response = await client.mutate({
      mutation: ADD_TO_CART,
      variables,
    });

    return response?.data?.Cart ?? null;
  } catch (error) {
    console.error('Cart Add Error:', error.message || error);
    throw error;
  }
};