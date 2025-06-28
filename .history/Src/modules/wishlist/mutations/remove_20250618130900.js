// src/modules/wishlist/mutations/remove.js
import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const REMOVE_FROM_WISHLIST = gql`
  mutation RemoveFromWishlist($userId: Int, $productId: Int, $shopId: Int, $Delete: Boolean) {
    Wishlist(userId: $userId, productId: $productId, shopId: $shopId, Delete: $Delete) {
      id
      
    }
  }
`;

export const removeFromWishlist = async ({ userId, productId, shopId }) => {
  try {
    const { data } = await client.mutate({
      mutation: REMOVE_FROM_WISHLIST,
      variables
    });

    const removed = data?.Wishlist;
    console.log('✅ Removed from wishlist:', removed);
    return removed;
  } catch (error) {
    console.error('❌ Error removing from wishlist:', error.message || error);
    throw error;
  }
};
