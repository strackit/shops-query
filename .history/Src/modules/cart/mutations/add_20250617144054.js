// src/modules/cart/controller/add_/index.js

import client, { gql } from '../../../utils/client.js';

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

export const addToCart = async ({ productId, shopId, userId, update, quantity }) => {
  try {
    const variables = { productId, shopId, userId, update, quantity };

    const response = await client.mutate({
      mutation: ADD_TO_CART,
      variables,
    });

    return response?.data?.Cart ?? null;
  } catch (error) {
    console.error('Cart Add Error:', error.message || error);
    throw error;
  }
};
