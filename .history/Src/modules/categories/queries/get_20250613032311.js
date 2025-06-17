import { gql } from '@apollo/client/core';
import client from '../../../utils/client.js';

// GraphQL query with filter input
const GET_CATEGORIES = gql`
  query GetCategories($filter: shop) {
    categories(filter: $filter) {
      category
    }
  }
`;

// Pass shopId as argument to the function
export const getCategories = async (shopId) => {
  try {
    const { data } = await client.query({
      query: GET_CATEGORIES,
      variables: {
        filter: {
          shopId: shopId
        }
      }
    });

    return data.categories;
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    throw error;
  }
};
