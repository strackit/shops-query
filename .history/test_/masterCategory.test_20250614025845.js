import graphqlModules from '../index.js';

export const masterCategoryTest = async () => {
  try {
    const result = await graphqlModules.category.getMasterCategoryController();
    console.log('Master Category:', result);
  } catch (err) {
    console.error('Master Category Error:', err);
  }
};

await masterCategoryTest();
