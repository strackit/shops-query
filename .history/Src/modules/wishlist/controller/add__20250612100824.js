import { addToWishlist } from '../mutations/add.js';

export const addToWishlistController = async (productId) => {
  const item = await addToWishlist(productId);
  console.log('💘 Added to Wishlist:', item);
  return item;
};
