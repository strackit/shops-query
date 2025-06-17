import { removeFromWishlist } from '../../mutations/remove.js';

export const removeFromWishlistController = async (id) => {
  try {
    const resp = await removeFromWishlist(id);
    console.log('💔 Removed from Wishlist:', resp);
    return resp;
  } catch (error) {
    console.error('❌ Controller failed to remove from wishlist:', error.message || error);
    throw error; // Optional: re-throw for upstream error handling
  }
};
