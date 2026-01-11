import { getProductsByPriceController } from '../modules/productByPrice/controller/get/index.js';

(async () => {
    try {
        let data = await getProductsByPriceController(10000, 12, 1);
        console.log('Final data:', data);
    } catch (error) {
        console.error('Test error:', error);
    }
})();

