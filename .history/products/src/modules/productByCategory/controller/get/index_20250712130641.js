// src/modules/productsByCategory/controller/get/index.js

import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (sec) => {
  try {
    const items = await fetchProductsByCategory(productCategoryId, shopId);
    console.log(`📦 Products for ProductCategoryId ${productCategoryId} in Shop ${shopId}:`, items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by category:', error.message || error);
    throw error;
  }
};
