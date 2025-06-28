// src/modules/categories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

export const GET_CATEGORIES = gql`
  query GetCategories($filter: shop) {
    categories(filter: $filter) {
      category
    }
  }
`;

export const getCategories = async (shopId) => {
   console.log('➡️ Query Received shopId:', shopId); 
  const variables = {
      filter: {
        shopId: Number(shopId),
        status
      },
    };

      return await client.request(GET_CATEGORIES, variables);
};