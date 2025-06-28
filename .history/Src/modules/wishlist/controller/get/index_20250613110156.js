import { fetchWishlist } from '../../gets.js';

export const getWishlistController = async () => {
  try {
    const items = await fetchWishlist();
    console.log('💖 Wishlist:', items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch wishlist:', error.message || error);
    throw error; // Optional: propagate for higher-level handling
  }
};
