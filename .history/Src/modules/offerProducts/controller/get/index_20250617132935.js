import { fetchOfferProducts } from '../../queries/get.js';

export const getOfferProductsController = async () => {
  try {
    const shopId = 12; // ✅ Set your actual shopId here
    const products = await fetchOfferProducts(shopId); // ✅ Pass it to the function
    console.log('Offer Products:', products);
    return products;
  } catch (error) {
    console.error('Controller failed to fetch offer products:', error.message || error);
    throw error;
  }
};
