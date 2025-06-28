// src/modules/masterCategories/controller/get/index.js
import { getMasterCategories } from '../../queries/get.js';

/**
 * Controller to fetch master categories
 * @returns {Promise<Array>} - Array of master category objects
 */
export const getMasterCategoriesController = async (shopId) => {
  console.log('➡️ Controller Received shopId:', shopId);

  const response = await client.query({
    query: GET_MASTER_CATEGORIES,
    variables: {
      filter: { shopId: Number(shopId) },
    },
  });

  return response.data.masterCategories;
};
