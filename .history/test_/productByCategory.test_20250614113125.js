import  getProductsByCategoryController } from '../index.js';

export const testProductsByCategory = async () => {
  try {
    const categoryId = 1; // You can change this as needed
    const result = await getProductsByCategoryController(categoryId);
    console.log('Products by Category:', result);
  } catch (err) {
    console.error('Products by Category Error:', err.message || err);
  }
};

// Auto-run for testing
await testProductsByCategory();
