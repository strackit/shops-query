import { addToWishlist } from '../../mutations/add.js';

export const addToWishlistController = async (productId) => {
  try {
    const item = await addToWishlist(productId);
    console.log('💘 Added to Wishlist:', item);
    return item;
  } catch (error) {
    console.error('❌ Controller failed to add to wishlist:', error.message || error);
    throw error; // Optional: propagate error to be handled by the caller
  }
};
