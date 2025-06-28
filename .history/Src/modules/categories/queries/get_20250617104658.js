// src/modules/categories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js'; // ensure correct path

const GET_CATEGORIES = gql`
  query GetCategories($filter: shop) {
    categories(filter: $filter) {
     category
    }
  }
`;

export const getCategories = async (shopId) => {
  console.log('➡️ Query Received shopId:', shopId); // log added for tracing
  try {
    const variables = {
      filter: { shopId: shopId, status: true },
    };
    const response = await client.request(GET_CATEGORIES, variables);
    return response.categories;
  } catch (error) {
    console.error('❌ Error in getCategories query:', error.message || error);
    throw error;
  }
};