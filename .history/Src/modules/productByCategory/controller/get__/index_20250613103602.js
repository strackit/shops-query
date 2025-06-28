import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (category) => {
  try {
    const items = await fetchProductsByCategory(category);
    console.log(`📦 Products in Category "${category}":`, items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by category:', error);
  }
};
