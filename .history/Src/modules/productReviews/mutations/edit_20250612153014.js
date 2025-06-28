import { gql } from 'graphql-tag';
import client from '../../../utils/client.js';

const EDIT_REVIEW = gql`
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
    const { data } = await client.mutate({
      mutation: EDIT_REVIEW,
      variables: { id, input },
    });
    return data.editReview;
  } catch (error) {
    console.error('❌ Error editing review:', error);
    throw error;
  }
};
