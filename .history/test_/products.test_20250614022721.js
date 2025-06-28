import graphqlModules from '../index.js';


export const productsTesr
try {
  const data = await graphqlModules.products.getProductsController();
  console.log('✅ Products:', data);
} catch (err) {
  console.error('❌ Error:', err.message);
}