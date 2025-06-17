// src/modules/wishlist/controller/remove/index.js
import { removeFromWishlist } from '../../mutations/remove.js';

export const removeFromWishlistController = async (userId, productId, shopId) => {
  try {
    const result = await removeFromWishlist({ userId, productId, shopId });
    console.log('✅ Controller removed from wishlist:', result);
    return result;
  } catch (error) {
    console.error('❌ Controller failed to remove from wishlist:', error.message || error);
    throw error;
  }
};
