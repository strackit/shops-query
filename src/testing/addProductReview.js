import { addReviewController } from '../modules/productReviews/controller/add/index.js';

(async () => {
    try {
        // Test data for adding a review
        const reviewInput = {
            orderId: 60415,      // Replace with a valid order ID
            userId: 1,       // Replace with a valid user ID
            productId: 8231, // Replace with a valid product ID
            rating: 5,       // Rating between 1-5
            review: 'This is a test review. The product quality is excellent!'
        };

        console.log('Testing addReviewController with input:', reviewInput);

        const result = await addReviewController(reviewInput);

        console.log('✅ Review added successfully!');
        console.log('Result:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('❌ Test error:', error.message || error);
        if (error.graphQLErrors) {
            console.error('GraphQL Errors:', error.graphQLErrors);
        }
        if (error.networkError) {
            console.error('Network Error:', error.networkError);
        }
    }
})();
