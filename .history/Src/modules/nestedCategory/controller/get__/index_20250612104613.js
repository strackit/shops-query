import { getNestedCategory } from '../queries/get.js';

export const getNestedCategoryController = async () => {
  try {
    const categories = await getNestedCategory();
    console.log('🧩 Nested Categories:', categories);
  } catch (error) {
    console.error('Controller failed to fetch nested categories:', error);
  }
};
