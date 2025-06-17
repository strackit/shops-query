import graphqlModules, { updateOrDeleteCartController } from '../index.js';

export const testUpdateOrDeleteCart = async () => {
  try {
    const result = await graphqlModules.({
      productId: 1,
      shopId: 1,
      userId: 1,
      update: true,
      quantity: 2
    });
    console.log('Cart Update/Delete Success:', result);
  } catch (err) {
    console.error('Cart Update/Delete Error:', err.message || err);
  }
};
