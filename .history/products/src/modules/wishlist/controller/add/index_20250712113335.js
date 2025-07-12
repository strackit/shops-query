// src/modules/wishlist/controller/add/index.js
import { addToWishlist } from '../../mutations/add.js';

export const addToWishlistController = async (productId, shopId, userId, quantity = 1, update = false) => {
  try {
    const result = await addToWishlist(productId, shopId, userId, quantity, update);
    console.log('✅ Added to Wishlist:', result);
    return result;
  } catch (error) {
    console.error('❌ Controller failed to add to wishlist:', error.message || error);
    throw error;
  }
};

export addToWishlistController