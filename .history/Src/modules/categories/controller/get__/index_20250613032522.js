import { getCategories } from '../queries/get.js';

// Controller now takes shopId as a parameter
export const getCategoriesController = async (shopId) => {
  try {
    const categories = await getCategories(shopId);
    console.log('📚 Categories:', categories);
    return categories; // Return it for route handler or test usage
  } catch (error) {
    console.error('❌ Controller failed to fetch categories:', error);
    throw error;
  }
};
