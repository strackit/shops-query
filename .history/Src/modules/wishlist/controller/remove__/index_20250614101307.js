import { removeFromWishlist } from '../../mutations/remove.js';

export const removeFromWishlistController = async ({ userId, productId, shopId }) => {
  try {
    const resp = await removeFromWishlist({ userId, productId, shopId });
    console.log('💔 Removed from Wishlist:', resp);
    return resp;
  } catch (error) {
    console.error(' Controller failed to remove from wishlist:', error.message || error);
    throw error;
  }
};
