import graphqlModules from './index.js';

const runAllQueriesAndMutations = async () => {
  try {
    const categories = await graphqlModules.getCategoriesController();
  } catch (err) {
    console.error('❌ Error in running tests:', err);
  }
};

runAllQueriesAndMutations();
