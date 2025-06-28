import graphqlModules from '../index.js';

export const testSearchProducts = async () => {
  try {
    const result = await graphqlModules.products.searchProductsController('shoe');
    console.log('Search Products:', result);
  } catch (err) {
    console.error('Search Products Error:', err.message || err);
  }
};


await test