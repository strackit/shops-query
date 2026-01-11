import client, { gql } from '../../../utils/apolloClient.js';

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

export const fetchReviews = async (productId = null, shopId = null, rating = null, orderId = null) => {
  try {
    productId = productId ? Number(productId) : null;
    shopId = shopId ? Number(shopId) : null;
    rating = rating ? Number(rating) : null;
    orderId = orderId ? Number(orderId) : null;
    const response = await client.query({
      query: GET_REVIEWS_QUERY,
      variables: {
        filters: {
          productId,
          shopId,
          rating,
          orderId,
        },
      },
    });

    return response?.data?.productReviews ?? [];
  } catch (error) {
    console.error('Error fetching product reviews:', error.message || error);
    throw error;
  }
};
