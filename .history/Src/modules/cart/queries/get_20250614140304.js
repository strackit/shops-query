import client, { gql } from '../../../utils/client.js';

export const GET_CART = gql`
  query Cart($filter: CartFilter1) {
    cart(filter: $filter) {
      productId
      quantity
      name
      shopId
      prize
      Discount
      featureImage
      userId
      description
      mastercategory
      tax
      id
    }
  }
`;

export const fetchCart = async (userId) => {
  try {
    const filter = { userId: Number(userId) };
    const data = await client.request(GET_CART, { filter });
    return data?.cart || [];
  } catch (error) {
    console.error('Fetch Cart Error:', error.response?.errors || error.message || error);
    throw error;
  }
};
