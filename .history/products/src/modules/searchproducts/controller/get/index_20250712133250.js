// src/modules/products/controller/search/index.js
import { searchProducts } from '../../queries/get.js';

/**
 * Controller to search products by keyword
 * @param {string} keyword - Search keyword
 * @returns {Promise<Array>} - List of search results
 */
export const searchProductsController = async (shopIdkeyword) => {
  try {
    const results = await searchProducts(keyword);
    console.log('🔍 Search Results:', results);
    return results;
  } catch (error) {
    console.error('❌ Controller failed to search products:', error.message || error);
    throw error;
  }
};
