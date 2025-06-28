// src/modules/masterCategories/controller/get_/index.js
import { getMasterCategories } from '../../queries/get.js';
import
export const getMasterCategoriesController = async () => {
  try {
    const categories = await getMasterCategories();
    console.log('🏷️ Master Categories:', categories);
    return categories; // ✅ Optional but useful for testing or reuse
  } catch (error) {
    console.error('❌ Controller failed to fetch master categories:', error);
    throw error; // ✅ Optional: propagate error upstream
  }
};
