const { gql } = require('graphql-tag');

const MASTER_CATEGORIES_QUERY = gql`
  query {
    masterCategories {
      id
      title
    }
  }
`;

module.exports = MASTER_CATEGORIES_QUERY;
