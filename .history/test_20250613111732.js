import graphqlModules from './index.js';

const testCases = [
  { name: 'Categories', fn: graphqlModules.getCategoriesController },
  { name: 'Master Categories', fn: graphqlModules.getMasterCategoriesController },
  { name: 'Nested Category', fn: graphqlModules.getNestedCategoryController },
  { name: 'Offer Products', fn: graphqlModules.getOfferProductsController },
  { name: 'Product Reviews', fn: graphqlModules.getProductReviewsController },
  { name: 'Products', fn: graphqlModules.getProductsController },
  { name: 'Wishlist', fn: graphqlModules.getWishlistController },
  { name: 'Cart', fn: graphqlModules.getCartController },
  { name: 'Top Products', fn: graphqlModules.getTopProductsController },
  { name: 'Products By Category', fn: graphqlModules.getProductsByCategoryController },
  { name: 'Product By Filters', fn: graphqlModules.getProductByFiltersController },
  { name: 'Product By Price', fn: graphqlModules.getProductByPriceController },
  { name: 'Search Products', fn: graphqlModules.searchProductsController },

  // Optional test for subscription handler
  {
    name: 'Listen to Order Updates (Subscription)',
    fn: async () => {
      console.log('🛎️ Listening to order updates (this may stay open)...');
      graphqlModules.listenToOrderUpdatesController((msg) => {
        console.log('📦 Order Update Received:', msg);
      });
      return 'Subscription started'; // For test confirmation
    },
  },
];

const runTests = async () => {
  console.log('🔍 Starting GraphQL module tests...\n');

  for (const test of testCases) {
    try {
      const result = await test.fn();
      console.log(`✅ ${test.name}:`, result);
    } catch (err) {
      console.error(`❌ ${test.name} Failed:`, err.message);
    }
  }

  console.log('\n✅ All tests attempted.');
};

runTests();
