// src/modules/wishlist/controller/add__/index.js
import { addToWishlist } from '../../mutations/add.js';

export const addToWishlistController = async (productId, shopId, userId) => {
  try {
    const item = await addToWishlist(productId, shopId, userId);
    console.log(' Added to Wishlist:', item);
    return item;
  } catch (error) {
    console.error(' Controller failed to add to wishlist:', error.message || error);
    throw error;
  }
};
