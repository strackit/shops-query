import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

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
    const { data } = await client.query({
      query: GET_PRODUCTS_BY_CATEGORY,
      variables: {
        filter: {
          category: categoryName
        }
      },
    });
    return data.productsByCategory;
  } catch (error) {
    console.error('❌ Error fetching products by category:', error);
    throw error;
  }
};