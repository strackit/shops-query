import { fetchFilteredProducts } from '../queries/get.js';

export const getFilteredProductsController = async (filter) => {
  const filteredProducts = await fetchFilteredProducts(filter);
  console.log('✅ Filtered Products:', filteredProducts);
  return filteredProducts;
};
