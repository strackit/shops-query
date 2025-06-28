// src/modules/masterCategories/queries/get.js
import { gql } from '@apollo/client/core';
import client from '../../../utils/client.js';

const GET_MASTER_CATEGORIES = gql`
  query GetMasterCategories {
    masterCategories {
      addedon
      category
      id
      image
      position
      shopId
      status
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
