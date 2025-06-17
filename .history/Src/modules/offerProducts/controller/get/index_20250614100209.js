// src/modules/offerProducts/controller/get.js
import { fetchOfferProducts } from '../../queries/get.js';

export const getOfferProductsController = async () => {
  try {
    const products = await fetchOfferProducts();
    console.log(' Offer Products:', products);
    return products;
  } catch (error) {
    console.error(' Controller failed to fetch offer products:', error);
    throw error;
  }
};