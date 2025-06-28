import client from '../../../utils/client.js';
import { gql } from '@apollo/client';

 export const GET_CART = `
  query {
    cart {
      id
   - productId
   - userId
   - shopId
   - quantity
   - featureImage
   - name
   - description
   - prize
   - mastercategory
   - category
   - hsnCode
   - minStock
   - noStock
   - tax
   - Discount

    }
  }
`;

