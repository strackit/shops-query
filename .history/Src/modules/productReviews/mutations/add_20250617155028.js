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

import { ADD_REVIEW } from '../../mutations/addReview'; // adjust path if needed
import client from '../../../client';

export const addReview = async (input) => {
  try {
    const response = await client.mutate({
      mutation: ADD_REVIEW,
      variables: { input },
    });

    return response?.data?.addReview ?? null;
  } catch (error) {
    console.error('❌ Error adding review:', error.message || error);
    throw error;
  }
};
