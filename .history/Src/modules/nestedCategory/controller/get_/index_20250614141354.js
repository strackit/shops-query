// src/modules/nestedCategory/controller/get_/index.js
import { getNestedCategory } from '../../queries/get.js';

export const getNestedCategoryController = async (filter = {}) => {
  try {
    const nested = await getNestedCategory(filter);
    console.log('✅ Nested Category:', nested);
    return nested;
  } catch (error) {
    console.error('❌ Controller failed to fetch nested category:', error.message || error);
    throw error;
  }
};
