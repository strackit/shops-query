const { gql } = require('graphql-tag');

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
