import client from '../../../utils/client.js';
import { gql } from '@apollo/client';

 export const GET_CART = `
  query {
    cart {
      id
      productId
      quantity
      addedAt
    }
  }
`;

