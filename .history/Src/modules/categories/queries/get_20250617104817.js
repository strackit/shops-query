// src/modules/categories/queries/get.js
import { gql } from '../../../../utils/client.js';
import client from '../../../../utils/client.js';

const GET_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilter) {
    categories(filter: $filter) {
      id
      name
      shopId
      status
    }
  }
`;

export const getCategories = async (shopId) => {
  console.log('➡️ Query Received shopId:', shopId);
  const variables = {
    filter: {
      shopId,
      status: true,
    },
  };

  try {
    const res = await client.request(GET_CATEGORIES, variables);
    return res.categories;
  } catch (err) {
    console.error('❌ Error in getCategories:', err.message || err);
    throw err;
  }
};
