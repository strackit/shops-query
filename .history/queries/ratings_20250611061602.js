const { gql } = require('graphql-tag');

// 🟡 QUERIES

export const GET_RATINGS = gql`
  query GetRatings($filter: ratingFilter) {
    Rating(filter: $filter) {
      id
      productId
      userId
      rating
      review
      createdAt
    }
  }
`;

export const GET_REVIEW_FILTERED = gql`
  query GetFilteredReviews($filter: reviewFilter) {
    RatingInfo(filter: $filter) {
      averageRating
      totalReviews
      reviews {
        user
        comment
        rating
        date
      }
    }
  }
`;
