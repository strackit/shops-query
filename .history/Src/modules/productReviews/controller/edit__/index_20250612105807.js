import { editReview } from '../../mutations/edit.js';

export const editReviewController = async (id, input) => {
  const review = await editReview(id, input);
  console.log('✅ Review Edited:', review);
  return review;
};
