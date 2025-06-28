import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (category, shopId) => {
  try {
    const items = await fetchProductsByCategory(category, shopId);
    console.log(`📦 Products in Category "${category}" (Shop: ${shopId}):`, items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by category:', error.message || error);
    throw error;
  }
};
