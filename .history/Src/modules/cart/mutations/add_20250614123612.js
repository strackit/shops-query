import client from '../../../utils/client.js';     
import { gql } from '../../../utils/client.js';

// GraphQL mutation to update/add to cart
export const ADD_TO_CART = gql`
  mutation AddToCart(
    $productId: Int
    $shopId: Int
    $userId: Int
    $update: Boolean
    $quantity: Int
  ) {
    Cart(
      productId: $productId
      shopId: $shopId
      userId: $userId
      Update: $update
      quantity: $quantity
    ) {
      id
      productId
      userId
      shopId
      quantity
    }
  }
`;

