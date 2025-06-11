const { gql } = require('@apollo/client');

const TOP_PRODUCTS_QUERY = gql`
  query {
    topProducts {
      id
      name
      rating
    }
  }
`;

module.exports = TOP_PRODUCTS_QUERY;
