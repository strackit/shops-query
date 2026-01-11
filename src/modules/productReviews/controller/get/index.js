import { fetchReviews } from '../../queries/get.js';

/**
 * Controller to get all product reviews
 * @returns {Promise<Array>} - List of reviews
 */
export const getReviewsController = async (productId, shopId, rating, orderId) => {
  try {
    const reviews = await fetchReviews(productId, shopId, rating, orderId);
    return reviews;
  } catch (error) {
    console.error('Controller failed to fetch reviews:', error.message || error);
    throw error;
  }
};


export default getReviewsController;