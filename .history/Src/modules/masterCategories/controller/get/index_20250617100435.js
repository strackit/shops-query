// src/modules/masterCategories/controller/get/index.js
import client from '../../../../utils/client.js'; // ✅ Adjust path based on your structure
import { GET_MASTER_CATEGORIES } from '../../queries/get.js';

/**
 * Controller to fetch master categories
 * @returns {Promise<Array>} - Array of master category objects
 */
export const getMasterCategoriesController = async (shopId) => {
  console.log('➡️ Controller Received shopId:', shopId);

  try {
    const response = await client.request(GET_MASTER_CATEGORIES, {
      filter: { shopId: Number(shopId), st },
    });

    return response.data.masterCategories;
  } catch (error) {
    console.error('❌ Error in controller:', error.message);
    throw error;
  }
};