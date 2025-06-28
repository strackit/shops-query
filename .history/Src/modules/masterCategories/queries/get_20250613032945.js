// src/modules/masterCategories/queries/get.js
import { gql } from '@apollo/client';
import client from '../../../utils/client.js';

const GET_MASTER_CATEGORIES = gql`
  query {
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
