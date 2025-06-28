// src/modules/masterCategories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_MASTER_CATEGORIES = gql`
  query MasterCategories($filter: CartFilter1) {
 masterCategories(filter: $filter) {
   addedon,
   category
    }
  }
`;

export const getMasterCategories = async () => {
  try {
    const { data } = await client.query({
      query: GET_MASTER_CATEGORIES,
    });
    return data.masterCategories;
  } catch (error) {
    console.error('❌ Error fetching master categories:', error);
    throw error;
  }
};
