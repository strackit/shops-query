// src/modules/cart/controller/remove_/index.js

import client from '../../../../utils/client.js';
import { UPDATE_OR_DELETE_CART } from '../../mutations/remove.js';

/**
 * Remove item from cart or decrease quantity
 * @param {number} userId
 * @param {number} productId
 * @param {number} quantity
 * @param {number} shopId
 * @param {boolean} Delete - true to delete, false to update
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

    const data = await client.request(UPDATE_OR_DELETE_CART, variables);
    console.log('Removed from Cart:', data.Cart);
    return data.Cart;
  } catch (error) {
    console.error('Error removing from cart:', error.message || error.response?.errors || error);
    throw error;
  }
};


export  {remove}