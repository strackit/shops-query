
import { GET_CART } from '../../queries/get.js';

/**
 * Fetches cart data using provided filter (e.g., userId, shopId).
 * 
 * @param {Object} filter - CartFilter1 input object.
 * @returns {Promise<Array>} - List of cart items.
 */
 export const fetchCart = async (userId) => {
  const response = await client.query({
    query: GET_CART,
    variables: { filter : userId }, 
    fetchPolicy: 'no-cache',
  });

  return response.data.cart;
};


