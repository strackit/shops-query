import client, { gql } from '../../../utils/apolloClient.js';

export const GET_NESTED_CATEGORY = gql`
  query GetNestedCategory($filter:  categery) {
    nestedCategory(filter: $filter) {
    id
    image
    position
    status
    SecondaryCategory {
      shopId
      id
      category
      image
      position
      status
    }
    Categoryname
  }
}
`;


