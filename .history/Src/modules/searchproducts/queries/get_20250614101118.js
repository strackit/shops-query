import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const SEARCH_PRODUCTS = gql`
  query SearchProducts($keyword: String!) {
    searchProducts(keyword: $keyword) {
      CategoryId
      masterCategoryId
      productId
      shopId
      userId
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
    console.error(' Error searching products:', error.message || error);
    throw error;
  }
};