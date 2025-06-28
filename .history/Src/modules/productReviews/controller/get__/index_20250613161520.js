import { fetchReviews } from '../../queries/get.js';

export const getReviewsController = async () => {
  try {
    const reviews = await fetchReviews();
    console.log('📝 Reviews:', reviews);
    return reviews;
  } catch (error) {
    console.error('❌ Controller failed to fetch reviews:', error.message || error);
    throw error;
  }
};
