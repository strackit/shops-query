import { fetchSearchedProducts } from '../../queries/get.js';

export const searchProductsController = async (keyword) => {
  const products = await fetchSearchedProducts(keyword);
  console.log(`🔍 Searched Products for "${keyword}":`, products);
  return products;
};
