// src/modules/categories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_CATEGORIES = gql`
  query GetCategories($filter: shop) {
    categories(filter: $filter) {
      category
    }
  }
`;

export const getCategories = async (shopId) => {
  console.log('➡️ Query Received shopId:', shopId);
  const variables = {
    filter: {
      shopId : Number(shopId), 
    },
  };

  try {
    const res = await client.query({
    query: GET_CATEGORIES,
    variables: variables,
  });
    return res.categories;
  } catch (err) {
    console.error('❌ Error in getCategories:', err.message || err);
    throw err;
  }
};
