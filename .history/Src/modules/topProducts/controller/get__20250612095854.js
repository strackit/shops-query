import { fetchTopProducts } from '../queries/get.js';

export const getTopProductsController = async () => {
  const products = await fetchTopProducts();
  console.log('🏆 Top Products:', products);
  return products;
};
