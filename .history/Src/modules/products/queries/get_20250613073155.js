import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const GET_PRODUCTS = gql`
  query {
    products {
      CategoryId
      masterCategoryId
      productId
      shopId 
      
    }
  }
`;

export const fetchProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS,
      fetchPolicy: 'no-cache', // optional: to avoid caching in dev
    });
    return data.products;
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    throw error;
  }
};
