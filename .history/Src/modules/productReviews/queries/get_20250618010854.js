import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_REVIEWS_QUERY = gql`
  query ProductReviews($filters: reviewFilter) {
  productReviews(filters: $filters) {
    userId
    review
    rating
    productId
    orderId
    id
    UserInfo {
      customerName
      customerId
    }
  }
}
`;

export const fetchReviews = async (productId) => {
  try {
    const response = await client.query({
      query: GET_REVIEWS_QUERY,
      variables: {
        filters: {
          productId: Number(productId), // pass required fields like productId, userId, etc.
        },
      },
    });

    return response?.data?.productReviews ?? [];
  } catch (error) {
    console.error('❌ Error fetching product reviews:', error.message || error);
    throw error;
  }
};
