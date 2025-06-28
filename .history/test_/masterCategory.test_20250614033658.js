import graphqlModules from '../index.js';
import client, { gql } from '../src/utils/client.js';
export const testMasterCategory = async () => {
  try {
    const result = await graphqlModules.category.getMasterCategoryController();
    console.log('Master Category:', result);
  } catch (err) {
    console.error('Master Category Error:', err.message || err);
  }
};
