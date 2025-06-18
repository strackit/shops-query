import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (categoryId, shopId) => {
  try {
    const items = await fetchProductsByCategory(categoryId, shopId);
    console.log(`📦 Products in Category "${categoryId}" (Shop: ${shopId}):`, items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by category:', error.message || error);
    throw error;
  }
};
