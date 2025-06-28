// src/modules/cart/controller/add_/index.js

import client, { gql } from '../../../utils/client.js';

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

// Function to call the mutation
export const addToCart = async ({ productId, shopId, userId, update = false, quantity = 1 }) => {
  try {
    const variables = { productId, shopId, userId, update, quantity };
    const data = await client.request(ADD_TO_CART, variables);
    console.log("✅ Item added/updated in cart:", data.Cart);
    return data.Cart;
  } catch (error) {
    console.error("❌ Cart Add Error:", error.message || error.response?.errors || error);
    throw error;
  }
};
