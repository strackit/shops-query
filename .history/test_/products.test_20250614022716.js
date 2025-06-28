import graphqlModules from '../index.js';


export 
try {
  const data = await graphqlModules.products.getProductsController();
  console.log('✅ Products:', data);
} catch (err) {
  console.error('❌ Error:', err.message);
}