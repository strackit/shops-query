import { fetchProductsByPrice } from '../../queries/get.js';

export const getProductsByPriceController = async ({ min, max }) => {
  const products = await fetchProductsByPrice({
    minPrice: min,
    maxPrice: max,
  });
  console.log('💰 Products by Price:', products);
  return products;
};
