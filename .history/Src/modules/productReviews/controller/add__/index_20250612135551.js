import { addReview } from '../queries/add.js';

export const addReviewController = async (input) => {
  try {
    const review = await addReview(input);
    console.log('✅ Review added:', review);
    return review;
  } catch (error) {
    console.error('❌ Failed to add review:', error);
  }
};
