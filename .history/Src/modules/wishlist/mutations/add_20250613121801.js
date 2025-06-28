import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const ADD_TO_WISHLIST = gql`
mutation Mutation($productId: Int, $shopId: Int, $userId: Int, $update: Boolean, $quantity: Int) {
  Cart(productId: $productId, shopId: $shopId, userId: $userId, Update: $update, quantity: $quantity) {
    productId
    userId
    shopId
    quantity
    update
  }
}
`;

export const addToWishlist = async (productId, shopId, userId, quantity = 1, update = false) => {
  try {
    const { data } = await client.mutate({
      mutation: ADD_TO_WISHLIST,
      variables: { productId, },
    });
    return data.addToWishlist;
  } catch (error) {
    console.error('❌ Error adding to wishlist:', error.message || error);
    throw error;
  }
};
