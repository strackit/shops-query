import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const REMOVE_FROM_WISHLIST = gql`
  mutation RemoveFromWishlist($userId: Int, $productId: Int, $shopId: Int, $delete: Boolean) {
    Wishlist(userId: $userId, productId: $productId, shopId: $shopId, Delete: $delete) {
      id
      userId
      productId
      shopId
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
        delete: true, // ensure 'Delete' is true to remove
      },
    });
    return data.Wishlist;
  } catch (error) {
    console.error('❌ Error removing from wishlist:', error.message || error);
    throw error;
  }
};
