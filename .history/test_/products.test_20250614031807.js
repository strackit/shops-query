import graphqlModules from '../index.js';
import { getProductsController } from '../src/modules/products/controller/get__/index.js';
export const productsTest = async () => {
  try {
    const data = await graphqlModules.products.getProductsController();
    console.log('products:', data);
  } catch (err) {
    console.error('products Fetch Error:', err);
  }
};

await productsTest();
