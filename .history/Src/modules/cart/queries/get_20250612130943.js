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

