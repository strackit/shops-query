import client, { gql } from '../../../utils/client.js';

const ADD_REVIEW = gql`
  mutation AddReview($input: ReviewInput!) {
    addReview(input: $input) {
      orderId
      productId
      rating 
      shopId
      userId
    }
  }
`;

export const addReview = async (input) => {
  try {
    const data = await client.request(ADD_REVIEW, { input });
    return data.addReview;
  } catch (error) {
    console.error('Error adding review:', error.message || error);
    throw error;
  }
};
