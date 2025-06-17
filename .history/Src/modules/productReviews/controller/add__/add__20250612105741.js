import { addReview } from '../../mutations/add.js';

export const addReviewController = async (input) => {
  const review = await addReview(input);
  console.log('✅ Review Added:', review);
  return review;
};
