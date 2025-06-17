import { gql } from 'graphql-tag';
import client from '../../../utils/client.js';

const GET_REVIEWS_QUERY = gql`
  query {
    productReviews {
     orderId
     productId
     userId
     
  }
`;

export const fetchReviews = async () => {
  try {
    const { data } = await client.query({
      query: GET_REVIEWS_QUERY,
    });
    return data.productReviews;
  } catch (error) {
    console.error('❌ Error fetching product reviews:', error);
    throw error;
  }
};
