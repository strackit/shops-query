import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_REVIEWS_QUERY = gql`
  query {
    productReviews {
      orderId
      productId
      rating
      shopId
      userId
    }
  }
`;

export const fetchReviews = async () => {
  try {
    const response = await client.query({
      query: GET_REVIEWS_QUERY,
    });

    return response?.data?.productReviews ?? [];
  } catch (error) {
    console.error('❌ Error fetching product reviews:', error.message || error);
    throw error;
  }
};