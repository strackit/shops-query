import graphqlModules from '../index.js';

export const testProductByPrice = async () => {
  try {
    const result = await graphqlModules.products.getProductByPriceController(500, 2000);
    console.log('Product By Price:', result);
  } catch (err) {
    console.error('❌ Product By Price Error:', err.message || err);
  }
};
