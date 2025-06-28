// src/modules/categories/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

export const GET_CATEGORIES = gql`
  query Categories($filter: shop) {
    categories(filter: $filter) {
      category
    }
  }
`;

