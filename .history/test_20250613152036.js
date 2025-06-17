
const runAllQueriesAndMutations = async () => {
  try {
    console.log('\n🚀 Running GraphQL Tests...\n');

    // ✅ Query: Categories
    const categories = await graphqlModules.getCategoriesController();
    console.log('✅ Categories Fetched:', categories, '\n');

    // ✅ Query: Master Categories
    const masterCategories = await graphqlModules.getMasterCategoriesController();
    console.log('✅ Master Categories Fetched:', masterCategories, '\n');

    // ✅ Query: Nested Category
    const nestedCategories = await graphqlModules.getNestedCategoryController();
    console.log('✅ Nested Categories Fetched:', nestedCategories, '\n');

    // ✅ Query: Offer Products
    const offerProducts = await graphqlModules.getOfferProductsController();
    console.log('✅ Offer Products Fetched:', offerProducts, '\n');

    // ✅ Subscription: Order Updates (Runs asynchronously)
    console.log('📡 Subscribing to order updates...');
    graphqlModules.listenToOrderUpdatesController((orderUpdate) => {
      console.log('🆕 Live Order Update:', orderUpdate, '\n');
    });

    // ⏳ Keep the script running (for subscriptions)
    console.log('⌛ Waiting for live updates...\n(Press Ctrl+C to exit)');
  } catch (err) {
    console.error('❌ Error in running tests:', err);
  }
};

runAllQueriesAndMutations();
