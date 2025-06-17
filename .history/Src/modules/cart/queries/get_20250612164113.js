import client from '../../../utils/client.js';
import { gql } from '@apollo/client';

 export const GET_CART = gql`
  query {
    cart {
      userId
      shopId
      
    }
  }
`;

