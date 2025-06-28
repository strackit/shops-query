import client from '../../../utils/client.js';

const SEARCH_PRODUCTS = `
  query SearchProducts($keyword: String!) {
    searchProducts(keyword: $keyword) {
      id
      name
      description
      price
    }
  }
`;

export const fetchSearchedProducts = async (keyword) => {
  try {
    const variables = { keyword };
    const data = await client.request(SEARCH_PRODUCTS, variables);
    return data.searchProducts;
  } catch (error) {
    console.error('❌ Error searching products:', error);
    throw error;
  }
};
