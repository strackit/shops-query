
import { GET_CART } from '../../queries/get.js';

/**
 * Fetches cart data using provided filter (e.g., userId, shopId).
 * 
 * @param {Object} filter - CartFilter1 input object.
 * @returns {Promise<Array>} - List of cart items.
 */
 const fetchCart = async (filter) => {
  const response = await client.query({
    query: GET_CART,
    variables: { filter : user }, 
    fetchPolicy: 'no-cache',
  });

  return response.data.cart;
};


export  default{ fetchCart  };