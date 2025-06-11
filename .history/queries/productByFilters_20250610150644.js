const { gql } = require('@apollo/client');

const PRODUCT_BY_FILTERS_QUERY = gql`
  query ProductByFilters($filters: ProductFilterInput) {
    productByFilters(filters: $filters) {
      id
      name
      price
    }
  }
`;

module.exports = PRODUCT_BY_FILTERS_QUERY;
