import { searchProductsController } from '../index.js';

export const testSearchProducts = async () => {
  try {
    const result = await searchProductsController('shoe'); // Keyword
    console.log('Search Products:', result);
  } catch (err) {
    console.error('Search Products Error:', err.message || err);
  }
};

// Auto-run for test
await testSearchProducts();
