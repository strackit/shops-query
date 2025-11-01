import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (filter) => {
  try {
    const items = await fetchProductsByCategory(
      filter.master,      // master category name (string)
      filter.shopId,       // shop ID (number)
      filter.secondary    // optional secondary category
    );
    return items;
  } catch (error) {
    console.error('Controller failed to fetch products by category:', error.message);
    throw error;
  }
};