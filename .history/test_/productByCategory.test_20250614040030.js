import graphqlModules from '../index.js';

export const testProductsByCategory = async () => {
  try {
    const categoryId = 1; // Change this as needed for your test
    const result = await graphqlModules.products.getProductsByCategoryController(categoryId);
    console.log('Products by Category:', result);
  } catch (err) {
    console.error('Products by Category Error:', err.message || err);
  }
};


await test