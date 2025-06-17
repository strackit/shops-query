import graphqlModules from '../index.js';
import getProductsC
export const productsTest = async () => {
  try {
    const data = await graphqlModules.products.getProductsController();
    console.log('products:', data);
  } catch (err) {
    console.error('products Fetch Error:', err);
  }
};

await productsTest();
