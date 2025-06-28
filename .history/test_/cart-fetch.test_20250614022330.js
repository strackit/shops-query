import graphqlModules from '../index.js';


export const fetchCart
try {
  const data = await graphqlModules.cart.fetchCart(1);
  console.log(' Cart:', data);
} catch (err) {
  console.error(' Error:', err.message);
}