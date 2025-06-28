import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const UPDATPRODUCT = gql`
mutation Mutation($productId: Int, $shopId: Int, $userId: Int, $update: Boolean, $quantity: Int) {
  Cart(productId: $productId, shopId: $shopId, userId: $userId, Update: $update, quantity: $quantity) {
    productId
    userId
    shopId
    quantity
    id
  }
}`;

export const addToCart = async (productId, quantity , update,shopId ) => {
  const { data } = await client.mutate({
    mutation: ADD_TO_CART,
    variables: { productId, quantity , update,shopId }
  });

  return data.addToCart;
};
