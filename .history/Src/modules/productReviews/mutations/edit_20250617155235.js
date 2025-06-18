import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const EDIT_REVIEW = gql`
  mutation EditReview($id: ID!, $input: ReviewInput!) {
    editReview(id: $id, input: $input) {
      orderId
      productId
      rating 
      shopId
      userId
    }
  }
`;

export const editReview = async (id, input) => {
  try {
    const response = await client.mutate({
      mutation: EDIT_REVIEW,
      variables: { id, input },
    });

    return response?.data?.editReview ?? null;
  } catch (error) {
    console.error('❌ Error editing review:', error.message || error);
    throw error;
  }
};
