// src/modules/cart/controller/fetch_/index.js

import client, { gql } from "../../../utils/client.js";

// GraphQL query
export const GET_CART = gql`
  query Cart($filter: CartFilter1) {
    cart(filter: $filter) {
      id
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
    }
  }
`;

// Fetch cart function
export const fetchCart = async (userId) => {
  try {
    const variables = { filter: { userId } };
    const data = await client.request(GET_CART, variables);
    console.log("✅ Cart Fetched:", data.cart);
    return data.cart;
  } catch (error) {
    console.error("❌ Fetch Cart Error:", error.message || error);
    throw error;
  }
};
