import graphqlModules from '../index.js';

export const testNestedCategory = async () => {
  try {
    const result = await graphqlModules.nestedCategory.getNestedCategoryController();
    console.log('Nested Category:', result);
  } catch (err) {
    console.error('Nested Category Error:', err.message || err);
  }
};

awai