// src/modules/cart/mutations/remove.js

import client, { gql } from '../../../utils/client.js';

// GraphQL mutation to update (decrease quantity) or delete cart item
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

// Remove or update cart item based on provided data
export const removeFromCart = async ({ productId, shopId, userId, update = true, quantity = 1 }) => {
  try {
    const variables = { productId, shopId, userId, update, quantity };
    const data = await client.request(UPDATE_OR_DELETE_CART, variables);
    return data.Cart;
  } catch (error) {
    console.error("Cart Remove Error:", error.message || error.response?.errors || error);
    throw error;
  }
};
