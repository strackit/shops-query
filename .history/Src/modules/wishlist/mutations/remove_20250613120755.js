import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const REMOVE_FROM_WISHLIST = gql`
mutation Mutation($delete: Boolean, $productId: Int, $userId: Int, $shopId: Int) {
    Cart(Delete: $delete, productId: $productId, userId: $userId, shopId: $shopId) {
      productId
      userId
      shopId
    }
  }
  }
`;

export const removeFromWishlist = async (id) => {
  try {
    const { data } = await client.mutate({
      mutation: REMOVE_FROM_WISHLIST,
      variables: { id },
    });
    return data.removeFromWishlist;
  } catch (error) {
    console.error('❌ Error removing from wishlist:', error.message || error);
    throw error;
  }
};
