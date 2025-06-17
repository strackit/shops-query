import graphqlModules from '../index.js';

export const testProducts = async () => {
  try {
    const data = await graphqlModules.products.getProductsController();
    console.log('Products:', data);
  } catch (err) {
    console.error('Products Fetch Error:', err.message || err);
  }
};



