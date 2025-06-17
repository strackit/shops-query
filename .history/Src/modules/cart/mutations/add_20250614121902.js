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

//  Function to call the mutation
export const addToCart = async ({ product, shopId, userId, u}) => {
  try {
    const quantity = Number(product.quantity) + 1;

    const { data } = await client.mutate({
      mutation: UPDATE_CART,
      variables: {
        productId: Number(product.productId),
        shopId: Number(shopId),
        userId: Number(userId),
        update: true,
        quantity,
      },
    });

    return data.Cart;
  } catch (error) {
    console.error(' Error adding to cart:', error.message || error);
    throw error;
  }
};
