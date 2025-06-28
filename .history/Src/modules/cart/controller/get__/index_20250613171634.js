// src/modules/cart/controller/get_/index.js

import client from '../../../utils/client.js';
import { GET_CART } from '../../queries/get.js';

/**
 * Fetches cart data using provided filter (e.g., userId, shopId).
 * 
 * @param {Object} filter - CartFilter1 input object.
 * @returns {Promise<Array>} - List of cart items.
 */
export const fetchCart = async (filter) => {
  const response = await client.query({
    query: GET_CART,
    variables: { filter }, 
    fetchPolicy: 'no-cache',
  });

  return response.data.cart;
};

export { GET_CART };
