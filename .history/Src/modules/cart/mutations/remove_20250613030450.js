import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

// 🧩 Mutation for updating quantity or deleting from cart
const UPDATE_OR_DELETE_CART = gql`
  mutation Mutation(
    $delete: Boolean
    $update: Boolean
    $productId: Int
    $userId: Int
    $shopId: Int
    $quantity: Int
  ) {
    Cart(
      Delete: $delete
      Update: $update
      productId: $productId
      userId: $userId
      shopId: $shopId
      quantity: $quantity
    ) {
      productId
      userId
      shopId
      quantity
      id
    }
  }
`;

export const removeFromCart = async ({ product, shopId, userId }) => {
  const quantity = Number(product.quantity) - 1;

  const variables = {
    productId: Number(product.productId),
    shopId,
    userId,
  };

  if (quantity > 0) {
    // Update cart with reduced quantity
    variables.update = true;
    variables.quantity = quantity;
  } else {
    // Remove from cart if quantity reaches 0
    variables.delete = true;
  }

  const { data } = await client.mutate({
    mutation: UPDATE_OR_DELETE_CART,
    variables,
  });

  return data.Cart;
};
