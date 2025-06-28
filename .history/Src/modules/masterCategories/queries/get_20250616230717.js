// src/modules/masterCategories/queries/get.js
import client, { gql } from '../../../utils/client.js';

export const GET_MASTER_CATEGORIES = gql`
  query GetMasterCategories($filter: MasterCategoryInput) {
    masterCategories(filter: $filter) {
       status
    shopId
    position
    image
    id
    category
    addedon
    }
  }
`;

export const getMasterCategories = async (filter = {}) => {
  try {
    const data = await client.request(GET_MASTER_CATEGORIES, { filter });
    return data.masterCategories;
  } catch (error) {
    console.error(' Error fetching master categories:', error.message || error);
    throw error;
  }
};

