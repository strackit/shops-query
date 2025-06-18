// src/modules/wishlist/controller/get/index.js
import { fetchWishlist } from '../../queries/get.js';

/**
 * Controller to fetch wishlist items
 * @param {number} userId - User ID to filter wishlist
 * @returns {Promise<Array>} List of wishlist items
 */
// src/modules/wishlist/controller/get/index.js

import { fetchWishlist } from '../../queries/get.js';

export const getWishlistController = async (userId) => {
  try {
    const wishlist = await fetchWishlist(userId);
    console.log('🧡 Wishlist Items:', wishlist);
    return wishlist;
  } catch (error) {
    console.error('❌ Controller failed to fetch wishlist:', error.message || error);
    throw error;
  }
};

