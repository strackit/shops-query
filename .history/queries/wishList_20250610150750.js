const { gql } = require('@apollo/client');

const WISHLIST_QUERY = gql`
  query {
    wishlist {
      productId
      name
      price
    }
  }
`;

module.exports = WISHLIST_QUERY;
