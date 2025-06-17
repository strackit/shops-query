// src/modules/reviews/controller/get/index.js

import { fetchReviews } from '../../queries/get.js';

/**
 * Controller to get all product reviews
 * @returns {Promise<Array>} - List of reviews
 */
export const getReviewsController = async () => {
  try {
    const reviews = await fetchReviews();
    console.log('✅ Reviews fetched:', reviews);
    return reviews;
  } catch (error) {
    console.error('❌ Controller failed to fetch reviews:', error.message || error);
    throw error;
  }
};


export default getReviewsController;