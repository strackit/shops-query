import graphqlModules from '../index.js';

export const testCartAdd = async () => {
  try {
    const result = await graphqlModules.CartControllers({
      productId: 1,
      shopId: 1,
      userId: 1,
      quantity: 2 // Quantity is REQUIRED
    });
    console.log('Cart Add Success:', result);
  } catch (err) {
    console.error('Cart Add Error:', err.message || err);
  }
};
