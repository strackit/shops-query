// src/modules/wishlist/mutations/remove.js
import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

exoconst REMOVE_FROM_WISHLIST = gql`
 mutation Mutation($userId: Int, $productId: Int, $shopId: Int, $delete: Boolean) {
  Wishlist(userId: $userId, productId: $productId, shopId: $shopId, Delete: $delete) {
    userId
    shopId
    productId
    id
  }
}
`;

export const removeFromWishlist = async ({ userId, productId, shopId }) => {
  try {
    const { data } = await client.mutate({
      mutation: REMOVE_FROM_WISHLIST,
      variables: {
        userId,
        productId,
        shopId,
        delete: true, // Assuming 'delete' is the correct flag to remove from wishlist
      },
    });

    const removed = data?.Wishlist;
    console.log('✅ Removed from wishlist:', removed);
    return removed;
  } catch (error) {
    console.error('❌ Error removing from wishlist:', error.message || error);
    throw error;
  }
};
