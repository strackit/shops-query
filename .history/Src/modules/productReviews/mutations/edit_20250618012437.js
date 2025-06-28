import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const EDIT_REVIEW = gql`
 mutation Mutation($orderId: Int, $userId: Int, $productId: Int, $rating: Int, $review: String) {
  editReview(orderId: $orderId, userId: $userId, productId: $productId, rating: $rating, review: $review) {
    userId
    review
    rating
    productId
    orderId
    id
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
