// src/modules/wishlist/controller/get__/index.js
import { fetchWishlist } from '../../queries/get.js';

export const getWishlistController = async () => {
  try {
    const items = await fetchWishlist();
    console.log('💖 Wishlist:', items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch wishlist:', error);
    throw error; // ✅ Important for error handling upstream
  }
};
