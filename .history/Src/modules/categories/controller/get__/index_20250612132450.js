import { getCategories } from '../queries/get.js';

export const getCategoriesController = async () => {
  try {
    const categories = await getCategories();
    console.log('📚 Categories:', categories);
    return categories; // Optional: return for use in other logic/tests
  } catch (error) {
    console.error('❌ Controller failed to fetch categories:', error);
    throw error; // Optional: propagate error for handling upstream
  }
};
