import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const GET_TOP_PRODUCTS = gql`
  query {
    topProducts {
      CategoryId
      masterCategoryId
      productId
      shopId 
      userId
    }
  }
`;

export const fetchTopProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_TOP_PRODUCTS,
    });
    return data.topProducts;
  } catch (error) {
    console.error('❌ Error fetching top products:', error);
    throw error;
  }
};
