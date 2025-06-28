// src/modules/categories/controller/get/index.js
import { getCategories } from '../../queries/get.js';

/**
 * Controller to fetch categories by shopId
 * @param {number} shopId - Shop ID to filter categories
 * @returns {Promise<Array>} List of categories
 */

export const getCategoriesController = async (shopId) => {
  console.log('➡️ Controller Received shopId:', shopId);
  try {
    const res = await client.request(GET_CATEGORIES, {
      filter: { shopId, status: true },
    });
    return res.categories;
  } catch (err) {
    console.error('❌ Controller failed to fetch categories:', err.message || err);
    throw err;
  }
};
