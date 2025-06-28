// src/modules/cart/mutations/add.js
import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

export const UPDATE_CART = gql`
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

export const addToCart = async ({ product, shopId, userId }) => {
  const quantity = Number(product.quantity) + 1;

  const { data } = await client.mutate({
    mutation: UPDATE_CART,
    variables: {
      productId: Number(product.productId),
      shopId,
      userId,
      update: true,
      quantity,
    },
  });

  return data.Cart;
};
