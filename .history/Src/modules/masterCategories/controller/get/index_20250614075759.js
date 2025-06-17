// src/modules/masterCategories/controller/get/index.js
import { getMasterCategories } from '../../queries/get.js';

export const getMasterCategoriesController = async () => {
  try {
    const categories = await getMasterCategories();
    console.log('Master Categories:', categories);
    return categories;
  } catch (error) {
    console.error('Controller failed to fetch master categories:', error);
    throw error;
  }
};
