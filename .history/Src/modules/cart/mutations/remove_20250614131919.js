// src/modules/cart/mutations/remove.js

import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

// Mutation to update (decrease quantity) or delete item from cart
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

// Function to decrease quantity or remove item from cart
export const removeFromCart = async ({ productId, shopId, userId, update, quantity }) => {
  try {
    const variables = { productId, shopId, userId, update, quantity };
    const data = await client.request(UPDATE_OR_DELETE_CART, variables); // ✅ FIXED
    return data.Cart;
  } catch (error) {
    console.error('Cart Add Error:', error.message || error);
    throw error;
  }
};


  
