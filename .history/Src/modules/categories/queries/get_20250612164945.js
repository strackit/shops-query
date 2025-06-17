import { gql } from '@apollo/client/core';
import client from '../../../utils/client.js';

const GET_CATEGORIES = gql`
  query {
    categories {
      shopid
      name
    }
  }
`;

export const getCategories = async () => {
  try {
    const { data } = await client.query({
      query: GET_CATEGORIES,
    });
    return data.categories;
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    throw error;
  }
};
