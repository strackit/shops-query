import { removeFromWishlist } from '../../mutations/remove.js';

export const removeFromWishlistController = async (id) => {
  const resp = await removeFromWishlist(id);
  console.log('💔 Removed from Wishlist:', resp);
  return resp;
};
