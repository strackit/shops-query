import { fetchProducts } from '../queries/get.js';

export const getProductsController = async () => {
  const products = await fetchProducts();
  console.log('✅ Products:', products);
  return products;
};
