import client from '../../../utils/client.js';

const GET_REVIEWS_QUERY = `
  query {
    productReviews {
      id
      productId
      rating
      comment
      reviewer
    }
  }
`;

export const fetchReviews = async () => {
  try {
    const data = await client.request(GET_REVIEWS_QUERY);
    return data.productReviews;
  } catch (error) {
    console.error('❌ Error fetching product reviews:', error);
    throw error;
  }
};
