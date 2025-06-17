import { fetchWishlist } from '../queries/get.js';

export const getWishlistController = async () => {
  const items = await fetchWishlist();
  console.log('💖 Wishlist:', items);
  return items;
};
