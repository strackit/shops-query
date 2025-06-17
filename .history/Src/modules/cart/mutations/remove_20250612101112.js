import client from '../../../utils/client.js';

const REMOVE_FROM_CART = `
  mutation RemoveFromCart($id: ID!) {
    removeFromCart(id: $id) {
      success
    }
  }
`;

export const removeFromCart = async (id) => {
  const data = await client.request(REMOVE_FROM_CART, { id });
  return data.removeFromCart;
};
