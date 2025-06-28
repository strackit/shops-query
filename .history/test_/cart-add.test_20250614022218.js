import graphqlModules from '../index.js';

try {
  const result = await graphqlModules.cart.addToCartController({ productId: 1, shopId: 1, userId: 1 });
  console.log(' Cart Add:', result);
} catch (err) {
  console.error(' Error:', err.message);
}
