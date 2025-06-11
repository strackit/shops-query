const { gql } = require('graphql-tag');

const CATEGORIES_QUERY = gql`
  query {
    categories {
      id
      name
    }
  }
`;

module.exports = CATEGORIES_QUERY;
