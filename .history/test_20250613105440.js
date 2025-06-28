import graphqlModules from './index.js';

const runTests = async () => {
  try {
    const wishlist = await graphqlModules.getWishlistController();
    console.log('✅ Wishlist Result:', wishlist);

    const topProducts = await graphqlModules.getTopProductsController();
    console.log('🔥 Top Products:', topProducts);
  } catch (err) {
    console.error('❌ Test Failed:', err);
  }
};

runTests();
