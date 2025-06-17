import graphqlModules from '../index.js';
import masterCategories from '../src/modules/masterCategories/index.js';
import { getMasterCategories } from '../src/modules/,a/queries/get.js';

export const testMasterCategory = async () => {
  try {
   const result = await graphqlModules.masterCategories.getMasterCategoriesController();
    console.log('Master Category:', result);
  } catch (err) {
    console.error('Master Category Error:', err.message || err);
  }
};

