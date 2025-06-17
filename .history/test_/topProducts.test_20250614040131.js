import graphqlModules from '../index.js';

export const testTopProducts = async () => {
  try {
    const result = await graphqlModules.products.getTopProductsController();
    console.log('Top Products:', result);
  } catch (err) {
    console.error('Top Products Error:', err.message || err);
  }
};


await testTopProducts();