import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const SEARCH_PRODUCTS = gql`
  query SearchProducts($keyword: String!) {
    searchProducts(keyword: $keyword) {
      
    }
  }
`;

export const searchProducts = async (keyword) => {
  try {
    const { data } = await client.query({
      query: SEARCH_PRODUCTS,
      variables: { keyword },
    });
    return data.searchProducts;
  } catch (error) {
    console.error('❌ Error searching products:', error);
    throw error;
  }
};
