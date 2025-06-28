import graphqlModules from '../index.js';

export const productReviewsTest = async () => {
  const productId = 1;

  try {
    const data = await graphqlModules.productReviews.getProductReviewsController(productId);

    if (data && data.length > 0) {
      console.log('Product Reviews:', JSON.stringify(data, null, 2));
    } else {
      console.log('No reviews found for the specified product.');
    }

    return data;
  } catch (err) {
    console.error('Product Reviews Error:', err);
    return null;
  }
};

// productReviewsTest(); // Uncomment to run directly
