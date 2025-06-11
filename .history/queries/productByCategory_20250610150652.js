const { gql } = require('@apollo/client');

const PRODUCTS_BY_CATEGORY_QUERY = gql`
  query ProductsByCategory($categoryId: ID!) {
    productsByCategory(categoryId: $categoryId) {
      id
      name
      price
    }
  }
`;

module.exports = PRODUCTS_BY_CATEGORY_QUERY;
