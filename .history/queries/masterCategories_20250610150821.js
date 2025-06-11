const { gql } = require('@apollo/client');

const MASTER_CATEGORIES_QUERY = gql`
  query {
    masterCategories {
      id
      title
    }
  }
`;

module.exports = MASTER_CATEGORIES_QUERY;
