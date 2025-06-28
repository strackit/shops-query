// src/modules/productsByCategory/controller/get/index.js
import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (shopId, categoryId = null) => {
  try {
    const items = await fetchProductsByCategory(shopId);

    // Optional: filter by categoryId if provided
    const filtered = categoryId
      ? items.filter((item) => item.categoryId === Number(categoryId))
      : items;

    console.log(`📦 Products in Shop: ${shopId}${categoryId ? ` and Category: ${categoryId}` : ''}`, filtered);
    return filtered;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by category:', error.message || error);
    throw error;
  }
};
