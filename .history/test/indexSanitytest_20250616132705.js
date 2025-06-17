import graphqlModules from '../index.js';

export const testIndexFile = async () => {
  try {
    // Check existence of few known methods
    if (
      typeof graphqlModules.fetchCategoriesController !== 'function' ||
      typeof graphqlModules.fetchCart !== 'function' ||
      typeof graphqlModules.getTopProductsController !== 'function'
    ) {
      throw new Error('One or more expected exports are missing in index.js');
    }

    console.log('✅ index.js exports verified successfully!');
  } catch (err) {
    console.error('❌ index.js export error:', err.message || err);
  }
};

// Run test
await testIndexFile();
