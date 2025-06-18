import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (productategoryId, shopId) => {
  try {
    const products = await fetchProductsByCategory(categoryId, shopId);
    console.log('📦 Products by Category:', products);
    return products;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by category:', error.message || error);
    throw error;
  }
};
