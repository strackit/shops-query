import client from '../../../utils/client.js';
import { gql } from '@apollo/client';

const GET_CART = `
  query {
    cart {
      id
      productId
      quantity
      addedAt
    }
  }
`;

export const fetchCart = async () => {
  const data = await client.request(GET_CART);
  return data.cart;
};
