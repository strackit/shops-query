// src/modules/nestedCategory/controller/get.js
import { getNestedCategory } from '../queries/get.js';

export const getNestedCategoryController = async () => {
  try {
    const nested = await getNestedCategory();
    console.log('🧩 Nested Category:', nested);
  } catch (error) {
    console.error('❌ Controller failed to fetch nested category:', error);
  }
};
