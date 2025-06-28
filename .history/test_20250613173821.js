// testRunner.js
import graphqlModules from './index.js';

const runAllQueriesAndMutations = async () => {
  console.log('🚀 Starting GraphQL Module Tests...\n');

  try {
    // === Top Products Test ===
    if (graphqlModules.topProducts) {
      console.log('🧪 Testing topProducts...');
      const data = await graphqlModules.topProducts();
      console.log('✅ topProducts response:', data, '\n');
    }

    // You can add more tests like:
    // if (graphqlModules.getWishlistController) {
    //   console.log('🧪 Testing getWishlistController...');
    //   const wishlist = await graphqlModules.getWishlistController();
    //   console.log('✅ Wishlist:', wishlist, '\n');
    // }

  } catch (err) {
    console.error('❌ Error during GraphQL test execution:', err);
  }

  console.log('\n🏁 Finished running all GraphQL module tests.');
};

runAllQueriesAndMutations();
