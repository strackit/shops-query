// src/modules/masterCategories/controller/get/index.js
import { getMasterCategories } from '../../queries/get.js';

/**
 * Controller to fetch master categories
 * @returns {Promise<Array>} - Array of master category objects
 */
export const getMasterCategoriesController = async () => {
  try {
    const categories = await getMasterCategories();
    console.log('✅ Master Categories:', categories);
    return categories; // No need to wrap in [{ categories }]
  } catch (error) {
    console.error('❌ Controller failed to fetch master categories:', error.message || error);
    throw error;
  }
};
