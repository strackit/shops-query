// src/modules/masterCategories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_MASTER_CATEGORIES = gql`
  query Cart($filter: CartFilter1) {
  cart(filter: $filter) {
    masterCategories {
      id
      title
      shopId
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
