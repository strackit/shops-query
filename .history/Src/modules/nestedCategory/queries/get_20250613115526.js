// src/modules/nestedCategory/queries/get.js
import { gql } from '@apollo/client/core';
import client from '../../../utils/client.js';

const GET_NESTED_CATEGORY = gql`
  query GetNestedCategory {
    nestedCategory {
      Categoryname
      SecondaryCategory {
        id
        shopId
        category
      }
      id
    }
  }
`;

export const getNestedCategory = async () => {
  try {
    const { data } = await client.query({
      query: GET_NESTED_CATEGORY,
    });
    return data.nestedCategory;
  } catch (error) {
    console.error('❌ Error fetching nested category:', error);
    throw error;
  }
};
