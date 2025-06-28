import graphqlModules from '../index.js';

export const testTopProducts = async () => {
  try {
    const result = await graphqlModules.getTopProductsController();
    console.log('✅ Top Products:', result);
  } catch (err) {
    console.error('❌ Top Products Error:', err.message || err);
  }
};

// Auto-run for test
await testTopProducts();
