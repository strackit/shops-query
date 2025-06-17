import graphqlModules from '../index.js';

export const tetCategory = async () => {
  try {
    const result = await graphqlModules.getMasterCategoriesController(); // ✅ correct name
    console.log('Master Categories:', result);
  } catch (err) {
    console.error('Master Category Error:', err);
  }
};

await masterCategoryTest();
