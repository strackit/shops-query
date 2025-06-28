// test.js

import graphqlModules from './index.js'; // This imports all controllers combined
import client from './Src/utils/client.js';
const runTests = async () => {
  try {
    // 🔍 Test: Fetch Categories
    if (graphqlModules.getCategoriesController) {
      const categories = await graphqlModules.getCategoriesController();
      console.log('📁 Categories:', categories);
    }

    // 🔍 Test: Top Products
    if (graphqlModules.getTopProductsController) {
      const topProducts = await graphqlModules.getTopProductsController();
      console.log('🔥 Top Products:', topProducts);
    }

    // 🔍 Test: Search
    if (graphqlModules.searchProductsController) {
      const searchResults = await graphqlModules.searchProductsController('shirt');
      console.log('🔍 Search Results:', searchResults);
    }

    // 🔍 Test: Add Wishlist
    if (graphqlModules.addToWishlistController) {
      const added = await graphqlModules.addToWishlistController('product123');
      console.log('💘 Added to Wishlist:', added);
    }

  } catch (error) {
    console.error('❌ Error in running test controllers:', error);
  }
};

runTests();
