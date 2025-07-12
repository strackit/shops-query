// This script runs all GraphQL module tests sequentially.

import dotenv from 'dotenv';
dotenv.config();

import graphqlModules from './index.js';

console.log('\n🧪 Running All GraphQL Module Tests…\n');

async function runAllTests() {
  const gm = graphqlModules;

  try {
    console.log('\n🔹 Categories');
    console.log(await gm.categories.getCategoriesController(12));

    console.log('\n🔹 Master Categories');
    console.log(await gm.masterCategories.getMasterCategoriesController(12));

    console.log('\n🔹 Nested Categories');
    console.log(await gm.nestedCategory.getNestedCategoryController(12));

    console.log('\n🔹 Offer Products');
    console.log(await gm.offerProducts.getOfferProductsController(12));

    console.log('\n🔹 Product Reviews');
    console.log(await gm.productReviews.getReviewsController(1)); // assuming productId = 1

    console.log('\n🔹 Get Products');
    console.log(await gm.products.getProductsController(12));

    console.log('\n🔹 Cart - Add');
    console.log(await gm.cart.addToCart({ productId: 7660, shopId: 348, userId: null, quantity: 6 }));

    console.log('\n🔹 Cart - Fetch');
    console.log(await gm.cart.fetchCart(1));

    console.log('\n🔹 Cart - Remove');
    console.log(await gm.cart.removeFromCart({ productId: 7660, shopId: 348, userId: null, update: false }));

    console.log('\n🔹 Wishlist - Fetch');
    const testWishlist = async () => {
      const userId = 1; // make sure this exists in your database
      try {
        const data = await gm.wishlist.fetchWishlistController(userId);
        console.log('✅ Wishlist fetched:', data);
      } catch (error) {
        console.error('❌ Test Error:', error.message);
      }
    };
    testWishlist();

    console.log('\n🔹 Wishlist - Add');
    const testWishlistAdd = async () => {
      try {
        const result = await gm.wishlist.addToWishlistController(101, 25); // Make sure both IDs exist
        console.log('✅ Wishlist Add:', result);
      } catch (error) {
        console.error('❌ Test Error:', error.message || error);
      }
    };
    testWishlistAdd();

    console.log('\n🔹 Wishlist - Remove');
    const testWishlistRemove = async () => {
      try {
        const result = await gm.wishlist.removeFromWishlistController({
          userId: 1,        // ✅ make sure this user exists
          productId: 3128,  // ✅ product must be in wishlist
          shopId: 12        // ✅ shop must match the one in the wishlist
        });
        console.log('✅ Wishlist Remove:', result);
      } catch (error) {
        console.error('❌ Test Error:', error.message || error);
      }
    };
    testWishlistRemove();

    console.log('\n🔹 Top Products');
    console.log(await gm.topProducts.getTopProductsController(12));

    console.log('\n🔹 Products by Filters');
    console.log(await gm.productByFilters.getProductsByFiltersController({
  sid: "7366",
  keyWord: [
    { key: "category", values: "electronics" },
    { key: "minPrice", values: "100" },
    { key: "maxPrice", values: "1000" }
  ]
}));

    console.log('\n🔹 Products by Category');
    console.log(await gm.productByCategory.getProductsByCategoryController(23, 12));

    console.log('\n🔹 Products by Price');
    console.log(await gm.productByPrice.getProductsByPriceController(100, 500));

    console.log('\n🔹 Search Products');
    console.log(await gm.searchproducts.searchProductsController('shoe'));

    console.log('\n🔹 Order Updates (subscribe, then unsubscribe after 5s)');
    const subscription = gm.orderUpdates.subscribeToOrderUpdatesController(data => {
      console.log('🔔 Order Update:', data);
    });
    setTimeout(() => subscription.unsubscribe(), 5000);

    

    console.log('\n✅ All Tests Initiated Successfully');
  } catch (err) {
    console.error('\n❌ Test Error:', err.response?.errors || err.message || err);
    process.exit(1);
  }
}

await runAllTests();
