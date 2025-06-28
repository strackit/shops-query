// src/modules/products/controller/getTop/index.js
import { fetchTopProducts } from '../../queries/get.js';

/**
 * Controller to fetch top products
 * @returns {Promise<Array>} - List of top products
 */
export const getTopProductsController = async (shopId) => {
  try {shopId);
    console.log('🔥 Top Products:', products);
    return products;
  } catch (error) {
    console.error('❌ Controller failed to fetch top products:', error.message || error);
    throw error;
  }
};
