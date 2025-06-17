import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const ADD_TO_CART = gql`
  mutation AddToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
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
