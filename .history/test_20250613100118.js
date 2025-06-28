// test.js
import graphqlModules from './index.js';

// Test individual modules
const runTests = async () => {
  console.log('\n--- Running All Module Tests ---\n');

  await graphqlModules.getCategoriesController();
  await graphqlModules.getMasterCategoriesController();
  await graphqlModules.getNestedCategoryController();
  await graphqlModules.getOfferProductsController();

  // Optional: Test WebSocket Subscription
  graphqlModules.listenToOrderUpdatesController((update) => {
    console.log('✅ Live Order Update:', update);
  });
};

runTests();
