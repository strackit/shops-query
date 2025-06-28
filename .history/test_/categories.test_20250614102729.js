import { fetchCategoriesController } from '../index.js';

export const fetchCategoriesTest = async () => {
  try {
    const data = await fetchCategoriesController();
    console.log('Categories:', data);
  } catch (err) {
    console.error('Fetch Categories Error:', err.message || err);
  }
};
