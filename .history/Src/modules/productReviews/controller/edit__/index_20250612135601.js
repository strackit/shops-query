import { editReview } from '../queries/edit.js';

export const editReviewController = async (id, input) => {
  try {
    const review = await editReview(id, input);
    console.log('✏️ Review edited:', review);
    return review;
  } catch (error) {
    console.error('❌ Failed to edit review:', error);
  }
};
