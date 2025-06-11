const { gql } = require('@apollo/client');

const PRODUCT_BY_PRICE_QUERY = gql`
  query ProductByPrice($minPrice: Float, $maxPrice: Float) {
    productByPrice(minPrice: $minPrice, maxPrice: $maxPrice) {
      id
      name
      price
    }
  }
`;

module.exports = PRODUCT_BY_PRICE_QUERY;
