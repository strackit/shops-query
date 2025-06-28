import { fetchReviews } from '../queries/get.js';

export const getReviewsController = async () => {
  const reviews = await fetchReviews();
  console.log('✅ Reviews:', reviews);
  return reviews;
};
