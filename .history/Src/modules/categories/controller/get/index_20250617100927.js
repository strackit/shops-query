// src/modules/categories/controller/get/index.js
import { getCategories } from '../../queries/get.js';

/**
 * Controller to fetch categories by shopId
 * @param {number} shopId - Shop ID to filter categories
 * @returns {Promise<Array>} List of categories
 */
