// src/modules/nestedCategory/controller/get_/index.js
import { getNestedCategory } from "../../queries" ;

export const getNestedCategoryController = async () => {
  try {
    const nested = await getNestedCategory();
    console.log('🧩 Nested Category:', nested);
    return nested; // ✅ Optional but useful for further use or testing
  } catch (error) {
    console.error('❌ Controller failed to fetch nested category:', error);
    throw error; // ✅ Optional: helps propagate error upstream if needed
  }
};
