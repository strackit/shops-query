import client from '../../../utils/client.js';

const ADD_REVIEW_MUTATION = `
  mutation AddReview($input: ReviewInput!) {
    addReview(input: $input) {
      id
      productId
      rating
      comment
      reviewer
    }
  }
`;

export const addReview = async (input) => {
  try {
    const variables = { input };
    const data = await client.request(ADD_REVIEW_MUTATION, variables);
    return data.addReview;
  } catch (error) {
    console.error('❌ Error adding review:', error);
    throw error;
  }
};
