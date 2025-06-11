const { gql } = require('p');

const PRODUCT_REVIEWS_QUERY = gql`
  query ProductReviews($productId: ID!) {
    productReviews(productId: $productId) {
      rating
      review
      user {
        name
        id
      }
    }
  }
`;

module.exports = PRODUCT_REVIEWS_QUERY;
