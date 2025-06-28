import graphqlModules from '../index.js';
import get
export const productsTest = async () => {
  try {
    const data = await graphqlModules.products.getProductsController();
    console.log('products:', data);
  } catch (err) {
    console.error('products Fetch Error:', err);
  }
};

await productsTest();
