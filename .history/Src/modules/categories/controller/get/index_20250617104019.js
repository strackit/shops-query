// src/modules/categories/controller/get/index.js
import { GET_CATEGORIES } from '../../queries/get.js';

/**
 * Controller to fetch categories by shopId
 * @param {number} shopId - Shop ID to filter categories
 * @returns {Promise<Array>} List of categories
 */
export const getCategoriesController = async (shopId) => {
  console.log('➡️ Controller Received shopId:', shopId);
  return await getCategories(shopId);  // ✅ Forward to query function
};