import client from '../../../utils/client.js';

const EDIT_REVIEW_MUTATION = `
  mutation EditReview($id: ID!, $input: ReviewInput!) {
    editReview(id: $id, input: $input) {
      id
      productId
      rating
      comment
      reviewer
    }
  }
`;

export const editReview = async (id, input) => {
  try {
    const variables = { id, input };
    const data = await client.request(EDIT_REVIEW_MUTATION, variables);
    return data.editReview;
  } catch (error) {
    console.error('❌ Error editing review:', error);
    throw error;
  }
};
