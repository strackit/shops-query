// src/modules/cart/controller/fetch_/index.js
import { GET_CART } from '../../queries/get.js';

/**
 * Fetches cart data by userId.
 * @param {number} userId - The user ID to filter cart items.
 * @returns {Promise<Array>} - List of cart items.
 */
export const fetchCart = async (userId) => {
  try {
    const filter = { userId: Number(userId) };

    const response = await client.query({
      query: GET_CART,
      variables: { filter },
    });

    return response?.data?.cart || [];
  } catch (error) {
    console.error('Fetch Cart Error:', error.message || error);
    throw error;
  }
};