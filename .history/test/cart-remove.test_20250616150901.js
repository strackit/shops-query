// test_/cart-remove.test.js

import graphqlModules from '../index.js';

export async function testRemoveFromCart() {
  try {
    const result = await graphqlModules.cart.removeFromCart({
      productId: 1,     // 🔁 replace with valid test productId
      shopId: 1,        // 🔁 replace with valid test shopId
      userId: 1,        // 🔁 replace with valid test userId
      update: true,
      quantity: 2
    });
    console.log('✅ Cart Update/Delete Success:', result);
  } catch (err) {
    console.error('❌ Cart Update/Delete Error:', err.message || err);
  }
}

export default testRemoveFromCart;
