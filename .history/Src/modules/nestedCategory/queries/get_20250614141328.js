// src/modules/nestedCategory/queries/get.js
import client, { gql } from '../../../utils/client.js';

const GET_NESTED_CATEGORY = gql`
  query GetNestedCategory($filter: NestedCategoryFilter) {
    nestedCategory(filter: $filter) {
      id
      name
      parentId
      shopId
      level
    }
  }
`;

export const getNestedCategory = async (filter = {}) => {
  try {
    const data = await client.request(GET_NESTED_CATEGORY, { filter });
    return data.nestedCategory;
  } catch (error) {
    console.error('❌ Error fetching nested categories:', error.message || error);
    throw error;
  }
};
