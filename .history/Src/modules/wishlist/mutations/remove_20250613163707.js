import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const ADD_TO_WISHLIST = gql`
  mutation AddToWishlist($productId: Int, $shopId: Int, $userId: Int) {
    addToWishlist(productId: $productId, shopId: $shopId, userId: $userId) {
      productId
      userId
      shopId
    }
  }
`;

export const addToWishlist = async (productId, shopId, userId) => {
  try {
    const { data } = await client.mutate({
      mutation: ADD_TO_WISHLIST,
      variables: { productId, shopId, userId },
    });
    return data.addToWishlist;
  } catch (error) {
    console.error('❌ Error adding to wishlist:', error.message || error);
    throw error;
  }
};
