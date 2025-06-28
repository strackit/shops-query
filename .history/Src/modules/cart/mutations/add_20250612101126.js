import client from '../../../utils/client.js';

const ADD_TO_CART = `
  mutation AddToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
      productId
      quantity
    }
  }
`;

export const addToCart = async (productId, quantity) => {
  const data = await client.request(ADD_TO_CART, { productId, quantity });
  return data.addToCart;
};
