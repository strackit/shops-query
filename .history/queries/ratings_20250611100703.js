const { gql } = require('graphql-tag');

// 🟡 QUERIES

const GET_RATINGS = gql`
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

const GET_REVIEW_FILTERED = gql`
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


const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($input: ReviewInput!) {
    addReview(input: $input) {
      id
      rating
      comment
    }
  }
`;

const EDIT_REVIEW_MUTATION = gql`
  mutation EditReview($input: ReviewInput!) {
    editReview(input: $input) {
      id
      rating
      comment
    }
  }
`;