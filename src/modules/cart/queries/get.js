import client, { gql } from '../../../utils/client.js';

export const GET_CART = gql`
  query Query($filter: CartFilter1) {
  cart(filter: $filter) {
    productId
    userId
    tax
    shopId
    quantity
    prize
    noStock
    name
    minStock
    mastercategory
    id
    hsnCode
    featureImage
    description
    category
    Discount
  }
}

`;

export const fetchCart = async (userId) => {
  try {
    const filter = { userId: Number(userId) };

    const response = await client.query({
      query: GET_CART,
      variables: { filter },
    });

    return response?.data?.cart || [];
  } catch (error) {
    console.error('Fetch Cart Error:', error.message || error);
    throw error;
  }
};
