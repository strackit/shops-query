const { gql } = require('@apollo/client');

const CATEGORIES_QUERY = gql`
  query {
    categories {
      id
      name
    }
  }
`;

module.exports = CATEGORIES_QUERY;
