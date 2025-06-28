import graphqlModules from '../index.js';

export const testProductReviews = async () => {
  try {
    const data = await graphqlModules.productReviews.getProductReviewsController(1); // Product ID 1
    console.log('Product Reviews:', data);
  } catch (err) {
    console.error('Product Reviews Error:', err.message || err);
  }
};


