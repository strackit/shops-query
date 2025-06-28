// src/modules/cart/controller/remove_/index.js

import client from '../../../../utils/client.js';
import { UPDATE_OR_DELETE_CART } from '../../mutations/remove.js';

/**
 * Removes an item from the cart or updates its quantity.
 * @param {number} userId - ID of the user.
 * @param {number} productId - ID of the product.
 * @param {number} quantity - Quantity to reduce or set.
 * @param {number} shopId - ID of the shop.
 * @param {boolean} Delete - true to delete the item, false to just update quantity.
 * @returns {Promise<Object|null>}
 */
export const removeFromCart = async (userId, productId, quantity, shopId, Delete) => {
  try {
    const variables = {
      userId: Number(userId),
      productId: Number(productId),
      shopId: Number(shopId),
      update: !Delete,
      quantity: Number(quantity),
    };

    const response = await client.mutate({
      mutation: UPDATE_OR_DELETE_CART,
      variables,
    });

    return response?.data?.Cart ?? null;
  } catch (error) {
    console.error('❌ Cart Remove Error:', error.message || error);
    throw error;
  }
};