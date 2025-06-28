import graphqlModules from './index.js';

const runAllQueriesAndMutations = async () => {
  try {
    console.log('\n🚀 Running GraphQL Tests...\n');

    // ✅ Query: Categories
    const categories = await graphqlModules.getCategoriesController();
    
  } catch (err) {
    console.error('❌ Error in running tests:', err);
  }
};

runAllQueriesAndMutations();
