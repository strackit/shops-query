import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

// 🧩 Mutation for updating quantity or deleting from cart
const UPDATE_OR_DELETE_CART = gql`
  mutation Mutation(
    $delete: Boolean
    $update: Boolean
    $productId: Int
    $userId: Int
    $shopId: Int
    $quantity: Int
  ) {
    Cart(
      Delete: $delete
      Update: $update
      productId: $productId
      userId: $userId
      shopId: $shopId
      quantity: $quantity
    ) {
      productId
      userId
      shopId
      quantity
      id
    }
  }
`;

