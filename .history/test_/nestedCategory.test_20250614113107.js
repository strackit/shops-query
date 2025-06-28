import  getNestedCategoryController  from '../index.js';

export const testNestedCategory = async () => {
  try {
    const result = await getNestedCategoryController();
    console.log('Nested Category:', result);
  } catch (err) {
    console.error('Nested Category Error:', err.message || err);
  }
};

// Auto-run for testing
await testNestedCategory();
