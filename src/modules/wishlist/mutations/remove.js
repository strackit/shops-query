// src/modules/wishlist/mutations/remove.js
import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

export const REMOVE_FROM_WISHLIST = gql`
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
    console.log('🧹 Removing from wishlist with:', { userId, productId, shopId });

    const { data } = await client.mutate({
      mutation: REMOVE_FROM_WISHLIST,
      variables: {
        userId,
        productId,
        shopId,
        delete: true,
      },
    });

    const removed = data?.Wishlist;
    if (!removed) {
      console.warn('⚠️ Null response received from Wishlist mutation.');
    }

    console.log('✅ Removed from wishlist:', removed);
    return removed;
  } catch (error) {
    console.error('❌ Error removing from wishlist:', error.message || error);
    throw error;
  }
};