import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($id: ID!) {
    removeFromCart(id: $id) {
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
