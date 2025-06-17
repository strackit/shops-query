import { addToCart } from './src/modules/cart/controller/add_/index.js';

(async () => {
  try {
    const result = await addToCart({
      productId: 12,
      shopId: 2,
      userId: 5,
      update: true,
      quantity: 2
    });

    console.log('✅ Cart Add Result:', result);
  } catch (err) {
    console.error('❌ Cart Add Error:', err.message || err);
  }
})();