import client from '../../../../utils/client.js';
import { gql } from '../../../../utils/client.js';
import 
// ✅ Define the GQL mutation
const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($userId: ID!, $productId: ID!, $shopId: ID!, $delete: Boolean!) {
    removeFromCart(userId: $userId, productId: $productId, shopId: $shopId, delete: $delete) {
      userId
      productId
      shopId
      quantity
    }
  }
`;

// ✅ Remove from cart controller
export const removeFromCart = async (userId, productId, quantity, shopId, Delete) => {
  try {
    const { data } = await client.mutate({
      mutation: REMOVE_FROM_CART,
      variables: {
        userId: Number(userId),
        productId: Number(productId),
        shopId: Number(shopId),
        delete: Delete,
      },
    });

    console.log(' Removed from Cart:', data.removeFromCart);
    return data.removeFromCart;
  } catch (error) {
    console.error(' Error removing from cart:', error.message);
    throw error;
  }
};
