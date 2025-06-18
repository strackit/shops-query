import client, { gql } from '../../../utils/client.js';

const GET_PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($filter: productFilter) {
    productsByCategory(filter: $filter) {
      id
      name
      size
      price
      category
    }
  }
`;

export const fetchProductsByCategory = async (categoryName) => {
  try {
    const variables = { filter: { category: categoryName } };

    const response = await client.query({
      query: GET_PRODUCTS_BY_CATEGORY,
      variables,
    });

    return response?.data?.productsByCategory ?? [];
  } catch (error) {
    console.error('❌ Error fetching products by category:', error.message || error);
    throw error;
  }
};