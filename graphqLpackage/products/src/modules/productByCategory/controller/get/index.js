// src/modules/productsByCategory/controller/get/index.js

import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (secondary) => {
  try {
    const items = await fetchProductsByCategory(secondary);
    console.log(`📦 Products for ProductCategoryId ${secondary} in Shop`, items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by category:', error.message || error);
    throw error;
  }
};
