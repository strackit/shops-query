import client, { gql } from '../../../utils/client.js';

export const UPDATE_CART = gql`
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
    const data = await client.request(UPDATE_CART, variables);
    return data.Cart;
  } catch (error) {
    console.error('Cart Add Error:', error.message || error);
    throw error;
  }
};
