// src/modules/nestedCategory/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_NESTED_CATEGORY = gql`
  query query NestedCategory($filter: categery) {
  nestedCategory(filter: $filter) {
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
    console.error(' Error fetching nested category:', error);
    throw error;
  }
};
