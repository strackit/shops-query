import  CartControllers } from '../index.js';

export const testCartAdd = async () => {
  try {
    const result = await CartControllers({
      productId: 1,
      shopId: 1,
      userId: 1,
      update: true,
      quantity: Number(quantity),
    });
    console.log('[✓] Cart Add Success:', result);
  } catch (err) {
    console.error('[✗] Cart Add Error:', err.message || err);
  }
};
