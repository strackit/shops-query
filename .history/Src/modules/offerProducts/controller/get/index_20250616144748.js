import { fetchOfferProducts } from './querget.js';

export const getOfferProductsController = async () => {
  try {
    const products = await fetchOfferProducts();
    console.log('Offer Products:', products);
    return products;
  } catch (error) {
    console.error('Controller failed to fetch offer products:', error.message || error);
    throw error;
  }
};
