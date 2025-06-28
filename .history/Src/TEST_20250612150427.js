import gqlModules from './index.js';

// Sample test runner function
const runTests = async () => {
  try {
    console.log('🧪 Running GraphQL Tests...\n');

    // Example: Get Wishlist
    const wishlist = await gqlModules.wishlist.getWishlistController();
    console.log('Wishlist:', wishlist);

    // Example: Get Categories
    const categories = await gqlModules.categories.getCategoriesController();
    console.log('Categories:', categories);

    // Example: Fetch Offer Products
    const offers = await gqlModules.offerProducts.getOfferProductsController();
    console.log('Offer Products:', offers);

    // You can add more test cases here by simply calling other module controllers

  } catch (error) {
    console.error('❌ Test run failed:', error);
  }
};

runTests();
