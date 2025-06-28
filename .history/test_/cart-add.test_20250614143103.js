import graphqlModules from '../index.js';

export const testCartAdd = async () => {
  try {
    const result = await graphqlModules.addToCart({
      productId: 12,
      shopId: 2,
      userId: 5,
      quantity: 2 // Quantity is REQUIRED
    });
    console.log('Cart Add Success:', result);
  } catch (err) {
    console.error('Cart Add Error:', err.message || err);
  }
};
