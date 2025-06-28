// src/modules/products/controller/get/index.js

import { fetchProducts } from '../../queries/get.js';

/**
 * Fetch all products based on provided filter options.
 * @param {Object} filters - Filtering options like userId, shopId, categoryId, etc.
 * @returns {Promise<Array>} - List of product objects.
 */
export const getProductsController = async (filters) => {
  try {
    const products = await fetchProducts(filters);
    console.log('Fetched Products:', products);
    return products;
  } catch (error) {
    console.error('Controller failed to fetch products:', error.message || error);
    throw error;
  }
};
