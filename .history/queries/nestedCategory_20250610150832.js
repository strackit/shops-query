const { gql } = require('@apollo/client');

const NESTED_CATEGORY_QUERY = gql`
  query {
    nestedCategory {
      id
      name
      parentId
    }
  }
`;

module.exports = NESTED_CATEGORY_QUERY;
