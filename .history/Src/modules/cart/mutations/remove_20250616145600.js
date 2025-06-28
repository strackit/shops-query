// src/modules/cart/mutations/remove.js

import { gql } from '../../utils/client.js';

export const UPDATE_OR_DELETE_CART = gql`
  mutation UpdateOrDeleteCart(
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
