import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const ADD_TO_CART = gql`
 mutation Cart($userId: Int, $productId: Int, $quantity: Int, $update: Boolean, $shopId: Int) {
  Cart(userId: $userId, productId: $productId, quantity: $quantity, Update: $update, shopId: $shopId) {
    
  userId
      productId
      quantity
  }
}
      
`;

export const addToCart = async (productId, quantity) => {
  const { data } = await client.mutate({
    mutation: ADD_TO_CART,
    variables: { productId, quantity }
  });

  return data.addToCart;
};
