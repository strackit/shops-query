import { gql } from 'graphql-tag';
import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($category: String!) {
    productsByCategory(category: $category) {
      id
      name
      size
      price
      category
    }
  }
`;

export const fetchProductsByCategory = async (category) => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS_BY_CATEGORY,
      variables: { category },
    });
    return data.productsByCategory;
  } catch (error) {
    console.error('❌ Error fetching products by category:', error);
    throw error;
  }
};
