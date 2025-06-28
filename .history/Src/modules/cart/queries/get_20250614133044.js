import client from "../../../utils/client.js";
import {gql} from '../../../utils/client.js';

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
    const data = await client.query(query:GET_CART, variables{};
    return data.cart;
  } catch (error) {
    console.error('Fetch Cart Error:', error.message || error);
    throw error;
  }
};