import { getProductsController } from '../index.js';

export const testProducts = async () => {
  try {
    const data = await getProductsController(); // optionally pass filters
    console.log('Products:', data);
  } catch (err) {
    console.error('Products Fetch Error:', err.message || err);
  }
};

// Auto-run for test
await testProducts();
