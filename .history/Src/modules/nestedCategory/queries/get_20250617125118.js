// src/modules/nestedCategory/queries/get.js
import client, { gql } from '../../../utils/client.js';

export const GET_NESTED_CATEGORY = gql`
  query GetNestedCategory($filter:  categery) {
    nestedCategory(filter: $filter) {
      id
      name
      parentId
      shopId
      level
    }
  }
`;


