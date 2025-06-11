import {g}
const { gql } = require('@apollo/client');

const PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      price
      discount
      images {
        url
        alt
      }
      specifications {
        key
        value
      }
    }
  }
`;

module.exports = PRODUCTS_QUERY;
