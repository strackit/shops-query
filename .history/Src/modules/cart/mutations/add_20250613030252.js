import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const UPDATE_PRODUCT = gql`
  mutation Mutation($productId: Int, $shopId: Int, $userId: Int, $update: Boolean, $quantity: Int) {
    Cart(productId: $productId, shopId: $shopId, userId: $userId, Update: $update, quantity: $quantity) {
      productId
      userId
      shopId
      quantity
      id
    }
  }
`;

// 🛠️ FIXED FUNCTION
export const addToCart = async ({ product, shopId, userId }) => {
  const quantity = Number(product.quantity) + 1;

  const { data } = await client.mutate({
    mutation: UPDATE_PRODUCT,
    variables: {
      productId: Number(product.productId),
      shopId: shopId,
      userId: userId,
      update: true,
      quantity: quantity,
    },
  });

  return data.Cart; // ✅ Fix: return correct field from response
};
