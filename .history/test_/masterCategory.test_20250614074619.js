import graphqlModules from '../index.js';
} from '../rc/modules/masterCategories/queries/get.js';

export const testMasterCategory = async () => {
  try {
   const result = await graphqlModules.masterCategories.getMasterCategoriesController();
    console.log('Master Category:', result);
  } catch (err) {
    console.error('Master Category Error:', err.message || err);
  }
};

