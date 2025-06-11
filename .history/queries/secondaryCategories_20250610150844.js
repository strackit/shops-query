const { gql } = require('@apollo/client');

const SECONDARY_CATEGORIES_QUERY = gql`
  query {
    secondaryCategories {
      id
      name
    }
  }
`;

module.exports = SECONDARY_CATEGORIES_QUERY;
