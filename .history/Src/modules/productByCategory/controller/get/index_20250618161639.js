// src/modules/productsByCategory/controller/get/index.js

import { fetchProductsByCategory } from '../../../../queries/get.js';

export const getProductsByCategoryController = async (productCategoryId, shopId) => {
  try {
    const items = await fetchProductsByCategory(productCategoryId, shopId);
    console.log(`📦 Products in Category "${productCategoryId}" (Shop: ${shopId}):`, items);
    return items;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by category:', error.message || error);
    throw error;
  }
};
