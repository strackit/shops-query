const { gql } = require('@apollo/client');

const SEARCH_PRODUCTS_QUERY = gql`
  query SearchProducts($keyword: String!) {
    searchProducts(keyword: $keyword) {
      id
      name
      price
    }
  }
`;

module.exports = SEARCH_PRODUCTS_QUERY;
