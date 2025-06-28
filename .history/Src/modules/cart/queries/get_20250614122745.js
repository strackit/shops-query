import client, { gql } from '../../../utils/client.js';

const GET_CART = gql`
  query FetchCart($userId: Int!) {
    cart(userId: $userId) {
      id
      productId
      quantity
      shopId
    }
  }
`;

export const fetchCart = async (userId) => {
  try {
    const data = await client.request(GET_CART, { userId });
    return data.cart;
  } catch (error) {
    console.error('❌ Fetch Cart Error:', error.message || error);
    throw error;
  }
};
