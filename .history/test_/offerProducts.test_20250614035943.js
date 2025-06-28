import graphqlModules from '../index.js';

export const testOfferProducts = async () => {
  try {
    const result = await graphqlModules.products.getOfferProductsController();
    console.log('Offer Products:', result);
  } catch (err) {
    console.error('Offer Products Error:', err.message || err);
  }
};

await 