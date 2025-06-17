import graphqlModules from '../index.js';


export co
try {
  const result = await graphqlModules.cart.updateOrDeleteCartController({ productId: 1, shopId: 1, userId: 1, update: true, quantity: 2 });
  console.log(' Cart Update/Delete:', result);
} catch (err) {
  console.error(' Error:', err.message);
}