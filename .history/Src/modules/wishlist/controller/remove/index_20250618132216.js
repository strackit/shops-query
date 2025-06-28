// src/modules/wishlist/controller/remove/index.js
import { removeFromWishlist } from '../../mutations/remove.js';

export const removeFromWishlistController = async (userId, productId, shopId) => {
 try {
    const variables = { userId, productId, shopId };

    const response = await client.mutate({
      mutation: REMOVE_FROM_WISHLIST,
      variables
    });

    return response?.data?.removeFromWishlist ?? null;
  } catch (error) {
    console.error('❌ Error removing from wishlist:', error.message || error);
    throw error;
  }
};
