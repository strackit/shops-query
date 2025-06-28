import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

export const UPDATE_PRODUCT = gql`
  mutation Mutation($productId: Int, $shopId: Int, $userId: Int, $update: Boolean, $quantity: Int) {
    Cart(productId: $productId, shopId: $shopId, userId: $userId, Update: $update, quantity: $quantity) {
      productId
      userId
      shopId
      quantity
      id
    }
  }
`;

