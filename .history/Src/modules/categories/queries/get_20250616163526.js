// src/modules/categories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

export const GET_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilter) {
    categories(filter: $filter) {
      category
    }
  }
`;

export const getCategories = async (shopId) => {
  const GET_CATEGORIES = gql`
    query GetCategories($filter: CategoryFilter) {
      categories(filter: $filter) {
        category
      }
    }
  `;

  const variables = {
    filter: {
      shopId, // must not be null
    },
  };

  const { data } = await client.request(GET_CATEGORIES, variables);
  return data;
};