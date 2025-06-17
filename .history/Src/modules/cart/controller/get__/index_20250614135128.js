// src/modules/cart/controller/fetch_/index.js

import client, { gql } from '../../../utils/client.js';
import { GET_CART } from '../../queries/get.js';

/**
 * Fetches cart data by userId.
 * @param {number} userId - The user ID to filter cart items.
 * @returns {Promise<Array>} - List of cart items.
 */
export const fetchCart = async (userId) => {
  try {
    const variables = {
      filter: {
        userId: Number(userId),
      }
    };

    const data = await client.request(GET_CART, variables);
    return data.cart;
  } catch (error) {
    console.error('Fetch Cart Error:', error.message || error.response?.errors || error);
    throw error;
  }
};

export {fetchCart as fetch}