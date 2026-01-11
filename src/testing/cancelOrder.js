import { cancelOrder } from '../modules/orders/controller/index.js';

(async () => {
    try {
        console.log('=== Testing cancelOrder ===\n');

        // Test: Cancel an order
        console.log('Test: Canceling order...');

        const orderId = 60415; // Replace with an actual order ID from your database

        console.log('Order ID to cancel:', orderId);

        const result = await cancelOrder(orderId);

        console.log('\nCanceled order result:', JSON.stringify(result, null, 2));
        console.log('\n=== Cancel order test completed successfully ===');
    } catch (error) {
        console.error('Test error:', error.message);
        console.error('Error details:', JSON.stringify(error, null, 2));
    }
})();
