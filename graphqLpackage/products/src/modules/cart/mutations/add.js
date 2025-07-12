// src/modules/cart/controller/add_/index.js

import client, { gql } from '../../../utils/client.js';

export const ADD_TO_CART = gql`
  mutation Mutation($userId: Int, $productId: Int, $quantity: Int, $shopId: Int, $delete: Boolean, $update: Boolean) {
  Cart(userId: $userId, productId: $productId, quantity: $quantity, shopId: $shopId, Delete: $delete, Update: $update) {
    userId
    shopId
    quantity
    productId
    id
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
