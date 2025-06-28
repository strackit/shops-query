// src/modules/masterCategories/queries/get.js
import client, { gql } from '../../../utils/client.js';

export const GET_MASTER_CATEGORIES = gql`
  query GetMasterCategories($filter: MasterCategoryInput) {
    masterCategories(filter: $filter) {
    shopId
    status
    position
    image
    id
    category
    addedon
    }
  }
`;


