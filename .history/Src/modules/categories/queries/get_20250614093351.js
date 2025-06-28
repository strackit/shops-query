// src/modules/categories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

//  Update the filter type to match your schema (e.g., CategoryFilter)
export const GET_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilter) {
    categories(filter: $filter) {
      category
    }
  }
`;

export const getCategories = async (shopId) => {
  try {
    const { data } = await client.query({
      query: GET_CATEGORIES,
      variables: {
        filter: {
          shopId: Number(shopId),
        },
      },
    });

    return data.categories;
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    throw error;
  }
};
