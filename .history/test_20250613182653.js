import graphqlModules from './index.js';

const runAllQueriesAndMutations = async () => {
  try {
    console.log('🧪 Running tests...');
    graphqlModules.test?.(); // from default export
    graphqlModules.listenToOrderUpdatesController?.(); // named export
  } catch (err) {
    console.error('❌ Error running tests:', err);
  }
};

runAllQueriesAndMutations();
