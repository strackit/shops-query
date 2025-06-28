import graphqlModules from '../index.js';

export const productsTest = async () => {
  try {
    const data = await graphqlModules.products.getProductsController();
    console.log('products:', data);
  } catch (err) {
    console.error('Products Fetch Error:', err);
  }
};

await productsTest();
