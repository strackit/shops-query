import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const REMOVE_FROM_CART = gql`
mutation Mutation($delete: Boolean, $productId: Int, $userId: Int, $shopId: Int) {
    Cart(Delete: $delete, productId: $productId, userId: $userId, shopId: $shopId) {
      productId
      userId
      shopId
    }
  }`
  

export const removeFromCart = async (userId,productId,quantity,shopId,Delete) => {
  const { data } = await client.mutate({
    mutation: REMOVE_FROM_CART,
    variables: {userId,productId,quantity,shopId,Delete}
  });

  return data.removeFromCart;
};
