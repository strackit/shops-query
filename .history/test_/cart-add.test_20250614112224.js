import { CartController } from '../index.js';

export const testCartAdd = async () => {
  try {
    const result = await addToCartController({
      productId: 1,
      shopId: 1,
      userId: 1
    });
    console.log('[✓] Cart Add Success:', result);
  } catch (err) {
    console.error('[✗] Cart Add Error:', err.message || err);
  }
};
