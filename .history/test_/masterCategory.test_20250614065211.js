import graphqlModules from '../index.js';
import categories from '../src/modules/categories/index.js';

export const testMasterCategory = async () => {
  try {
    const result = await graphqlModules.getMasterCategoryController(categories(shop12));
    console.log('Master Category:', result);
  } catch (err) {
    console.error('Master Category Error:', err.message || err);
  }
};

