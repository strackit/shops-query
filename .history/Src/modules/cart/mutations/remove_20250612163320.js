import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart$userId: Int, $productId: Int, $quantity: Int, $shopId: Int, $delete: Boolean {
    removeFromCart(userId: $userId, productId: $productId, quantity: $quantity, shopId: $shopId, Delete: $delete) {
      success
    }
  }
`;

export const removeFromCart = async (id) => {
  const { data } = await client.mutate({
    mutation: REMOVE_FROM_CART,
    variables: { id }
  });

  return data.removeFromCart;
};
