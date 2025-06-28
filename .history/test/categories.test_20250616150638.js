import graphqlModules from '../index.js';

export const async function fetchCategoriesTest() {
  try {
    const data = await graphqlModules.categories.fetchCategoriesController();
    console.log('✅ Categories Fetched:', data);
  } catch (err) {
    console.error('❌ Fetch Categories Error:', err.message || err);
  }
}


