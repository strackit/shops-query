import { addReview } from '..mutations/add.js';

export const addReviewController = async (input) => {
  try {
    const review = await addReview(input);
    console.log('✅ Review Added:', review);
    return review;
  } catch (error) {
    console.error('❌ Controller failed to add review:', error.message || error);
    throw error; // Optional: rethrow if you want to propagate the error upward
  }
};
