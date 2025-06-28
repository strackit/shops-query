// src/modules/masterCategories/queries/get.js
import client, { gql } from '../../../utils/client.js';

export const GET_MASTER_CATEGORIES = gql`
  query GetMasterCategories($filter: shop) {
    masterCategories(filter: $filter) {
    shopId
    status
    position
    image
    id
    category
    addedon
    }
  }
`;

export const getMasterCategories = async (shopId) => {
  try {
    const variables = { filter: { shopId} };
    const { masterCategories } = await client.request(GET_MASTER_CATEGORIES, variables);
    return masterCategories;
  } catch (err) {
    console.error('❌ Error fetching categories:', err.message);
    throw err;
  }
};
