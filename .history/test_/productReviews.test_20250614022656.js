import graphqlModules from '../index.js';

export const productReviewsTest = async () =>{
try {
  const data = await graphqlModules.productReviews.getProductReviewsController(1);
  console.log('✅ Product Reviews:', data);
} catch (err) {
  console.error('❌ Error:', err.message);
}