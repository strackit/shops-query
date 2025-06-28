import graphqlModules from '../index.js';

export default async function testCartAdd() {
  const input = { productId: 1, shopId: 1, userId: 1 };

  try {
    const result = await graphqlModules.cart.addToCartController(input);
    console.log('Cart Add Result:', JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Cart Add Error:', err);
  }
}
