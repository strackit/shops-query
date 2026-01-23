
import { fetchProducts } from '../modules/products/queries/get.js';

(async () => {
  try {
    // Test product pagination with all new parameters
    const params = {
      shopId: 538,
      categoryId: 1650,
      masterCategoryId: 622,
      start: 0,
      end: 1,
      userId: 5
    };
    const result = await fetchProducts(params);
    console.log('Product pagination test result:', result);
  } catch (error) {
    console.error('Product pagination test error:', error);
  }
})();
