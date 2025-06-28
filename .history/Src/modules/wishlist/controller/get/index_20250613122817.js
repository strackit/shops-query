import { fetchWishlist } from '../../../queries/gets.js'; // ✅ This is correct based on your structure

export const getWishlistController = async () => {
  try {
    const items = await fetchWishlist();
    console.log('💖 Wishlist:', items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch wishlist:', error);
  }
};
