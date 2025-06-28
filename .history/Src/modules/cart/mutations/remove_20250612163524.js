import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart$userId: Int, $productId: Int, $quantity: Int, $shopId: Int, $delete: Boolean {
    removeFromCart(userId: $userId, productId: $productId, quantity: $quantity, shopId: $shopId, Delete: $delete) {
     userId,
     productId,
     quantity,
     shopId
     Delete
    }
  }
`;

export const removeFromCart = async (userId,productId,quantity,shopId,Delete) => {
  const { data } = await client.mutate({
    mutation: REMOVE_FROM_CART,
    variables: {userId,productId, }
  });

  return data.removeFromCart;
};
