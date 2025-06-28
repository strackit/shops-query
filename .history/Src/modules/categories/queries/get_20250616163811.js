// src/modules/categories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

export const GET_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilter) {
    categories(filter: $filter) {
      category
    }
  }
`;

export const getCategories = async (shopId) => {
    const variables = {
      filter: {
        shopId: Number(shopId),
      },
    };
try{
    const data = await client.request(GET_CATEGORIES, variables);
    return data.categories ?? [];
  } catch (error) {
    console.error('❌ Error fetching categories:', error.response?.errors || error.message || error);
    throw error;
  }
};
