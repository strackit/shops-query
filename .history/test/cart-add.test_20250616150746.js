// test_/cart-add.test.js

import graphqlModules from '../index.js';

export const  testAddToCart() {
  console.log('🔁 Running cart-add.test...');
  const { cart } = graphqlModules;
  const result = await cart.addToCart({ productId: 1, shopId: 1, userId: 1, quantity: 2 });
  console.log('🚀 Result of addToCart():', result);
}

export default testAddToCart;
