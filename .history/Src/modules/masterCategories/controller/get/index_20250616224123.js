// src/modules/masterCategories/controller/get/index.js
import { getMasterCategories } from '../../queries/get.js';

/**
 * Controller to fetch master categories
 * @returns {Promise<Array>} - Array of master category objects
 */
export const getMasterCategoriesController = async () => {
  const response = await client.query({
    query: GET_MASTER_CATEGORIES,
    variables: { filter: {} },
  });
  return response.data.masterCategories;
};

