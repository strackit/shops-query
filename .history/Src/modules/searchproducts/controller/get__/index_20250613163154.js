import { searchProducts } from '../../queries/get.js';

export const searchProductsController = async (keyword) => {
  try {
    const results = await searchProducts(keyword);
    console.log('🔍 Search Results:', results);
    return results;
  } catch (error) {
    console.error('❌ Controller failed to search products:', error.message || error);
    throw error;
  }
};