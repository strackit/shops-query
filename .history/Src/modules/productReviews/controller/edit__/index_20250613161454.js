import { editReview } from '../../mutations/edit.js';

export const editReviewController = async (id, input) => {
  try {
    const review = await editReview(id, input);
    console.log('✏️ Review Edited:', review);
    return review;
  } catch (error) {
    console.error('❌ Controller failed to edit review:', error.message || error);
    throw error;
  }
};
