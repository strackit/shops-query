import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const ADD_TO_CART = gql`
 mutation Cart($userId: Int, $productId: Int, $quantity: Int, $update: Boolean, $shopId: Int) {
  Cart(userId: $userId, productId: $productId, quantity: $quantity, Update: $update, shopId: $shopId) {
    
  userId
      productId
      quantity
      shopId
      Update
  }
}
      
`;

export const addToCart = async (productId, quantity , update,shopId ) => {
  const { data } = await client.mutate({
    mutation: ADD_TO_CART,
    variables: { productId, quantity , update,shopId }
  });

  return data.addToCart;
};
