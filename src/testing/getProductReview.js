import { getReviewsController } from '../modules/productReviews/controller/get/index.js';

(async () => {
    try {
        let data = await getReviewsController(null, 362, 4, null);
        console.log('Final data:', data);
    } catch (error) {
        console.error('Test error:', error);
    }
})();

