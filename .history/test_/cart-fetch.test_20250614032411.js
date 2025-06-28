import graphqlModules from '../index.js';

export const fetchcartTest = async () => {
  try {
    const data = await graphqlModules.cart.fetchCart(1);
    console.log('Cart:', data);
  } catch (err) {
    console.error('Fetch Cart Error:', err);
  }
};

await fetchcartTest();
