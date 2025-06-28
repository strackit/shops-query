import { fetchOfferProducts } from '../queries/get.js';

export const getOfferProductsController = async () => {
  const products = await fetchOfferProducts();
  console.log('💸 Offer Products:', products);
  return products;
};
