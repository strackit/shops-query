import { getCategories } from '../queries/get.js';

export const getCategoriesController = async () => {
  try {
    const categories = await getCategories();
    console.log('📚 Categories:', categories);
  } catch (error) {
    console.error('❌ Controller failed to fetch categories:', error);
  }
};
