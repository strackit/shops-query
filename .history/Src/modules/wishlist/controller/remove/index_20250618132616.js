import client from '../../../../utils/client.js';
import { REMOVE_FROM_WISHLIST } from '../../mutations/remove.js';

/**
 * Removes item from wishlist
 * @param {Object} params - { userId, productId, shopId }
 */
export const removeFromWishlistContr = async ({ userId, productId, shopId }) => {
  try {
    const variables = { userId, productId, shopId };

    const response = await client.mutate({
      mutation: REMOVE_FROM_WISHLIST,
      variables,
    });

    return response?.data?.removeFromWishlist ?? null;
  } catch (error) {
    console.error('❌ Error removing from wishlist:', error.message || error);
    throw error;
  }
};
