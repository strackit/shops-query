import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (category) => {
  const products = await fetchProductsByCategory(category);
  console.log(`✅ Products in Category '${category}':`, products);
  return products;
};
