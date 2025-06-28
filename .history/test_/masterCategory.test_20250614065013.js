import graphqlModules from '../index.js';

export const testMasterCategory = async () => {
  try {
    const result = await graphqlModules.mastercategories.getMasterCategoryController();
    console.log('Master Category:', result);
  } catch (err) {
    console.error('Master Category Error:', err.message || err);
  }
};

