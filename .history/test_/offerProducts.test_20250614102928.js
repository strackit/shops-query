import { getOfferProductsController } from '../index.js';

export const testOfferProducts = async () => {
  try {
    const result = await getOfferProductsController();
    console.log('Offer Products:', result);
  } catch (err) {
    console.error('Offer Products Error:', err.message || err);
  }
};

// Auto-run for testing
await testOfferProducts();
