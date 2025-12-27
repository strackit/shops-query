import { fetchProductsByCategory } from '../../queries/get.js';

export const getProductsByCategoryController = async (masterCategory, shopId, secondaryCategory = null , offset = null , limit = null , userId = null) => {
  try {
    const items = await fetchProductsByCategory(masterCategory, shopId, secondaryCategory , offset , limit , userId );
    return items;
  } catch (error) {
    console.error('Controller failed to fetch products by category:', error.message);
    throw error;
  }
};