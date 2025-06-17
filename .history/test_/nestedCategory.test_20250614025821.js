import graphqlModules from '../index.js';

export const nestedCategoryTest = async () => {
  try {
    const result = await graphqlModules.category.getNestedCategoryController();
    console.log('Nested Category:', result);
  } catch (err) {
    console.error('Nested Category Error:', err);
  }
};

await nestedCategoryTest();
