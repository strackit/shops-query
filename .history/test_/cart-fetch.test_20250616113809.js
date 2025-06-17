// test_/cart-fetch.test.js

import graphqlModules from '../index.js';

async function testFetchCart() {
  try {
    const userId = 1; // 👈 Update this with a real test userId if needed
    const data = await graphqlModules.cart.fetchCart(userId);
    console.log('✅ Fetch Cart Success:', data);
  } catch (err) {
    console.error('❌ Fetch Cart Error:', err.message || err);
  }
}

export default testFetchCart;
