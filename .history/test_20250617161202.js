// This script runs all GraphQL module tests sequentially.

import dotenv from 'dotenv';
dotenv.config();

const start = Date.now();

import graphqlModules from './index.js';

console.log('\n🧪 Running All GraphQL Module Tests…\n');

async function runAllTests() {
  const gm = graphqlModules;

  try {
    console.log('\n🔹 Categories');
    console.log(await gm.categories.getCategoriesController());

    console.log('\n🔹 Master Categories');
    console.log(await gm.masterCategories.getMasterCategoriesController(12));

    console.log('\n🔹 Nested Categories');
    console.log(await gm.nestedCategory.getNestedCategoryController(12));

    console.log('\n🔹 Offer Products');
    console.log(await gm.offerProducts.getOfferProductsController(12));

    console.log('\n🔹 Product Reviews');
    console.log(await gm.productReviews.getReviewsController(1)); // assuming productId = 1

    console.log('\n🔹 Get Products');
    console.log(await gm.products.getProductsController());

    console.log('\n🔹 Cart - Add');
    console.log(await gm.cart.addToCart({ productId: 1, shopId: 1, userId: 1, quantity: 2 }));

    console.log('\n🔹 Cart - Fetch');
    console.log(await gm.cart.fetchCart(1));

    console.log('\n🔹 Cart - Remove');
    console.log(await gm.cart.removeFromCart({ productId: 1, shopId: 12, userId: 1, update: false, quantity: 1 }));

    console.log('\n🔹 Wishlist - Fetch');
    console.log(await gm.wishlist.getWishlistController({ userId: 11 }));

    console.log('\n🔹 Wishlist - Add');
    console.log(await gm.wishlist.addToWishlistController(1, 1, 11)); // productId, shopId, userId

    console.log('\n🔹 Wishlist - Remove');
    console.log(await gm.wishlist.removeFromWishlistController({ userId: 1, productId: 1, shopId: 12 }));

    console.log('\n🔹 Top Products');
    console.log(await gm.topProducts.getTopProductsController());

    console.log('\n🔹 Products by Category');
    console.log(await gm.productByCategory.getProductsByCategoryController(1));

    console.log('\n🔹 Products by Filters');
    console.log(await gm.productByFilters.getProductsByFiltersController({ shopId: 1, userId: 1 }));

    console.log('\n🔹 Products by Price');
    console.log(await gm.productByPrice.getProductsByPriceController(100, 500));

    console.log('\n🔹 Search Products');
    console.log(await gm.searchproducts.searchProductsController('shoe'));

    console.log('\n🔹 Order Updates (subscribe, then unsubscribe after 5s)');
await new Promise(resolve => {
  const subscription = gm.orderUpdates.subscribeToOrderUpdatesController(data => {
    console.log('🔔 Order Update:', data);
  });
  setTimeout(() => {
    subscription.unsubscribe();
    resolve();
  }, 5000);
});

    console.log('\n✅ All Tests Initiated Successfully');
  } catch (err) {
    console.error('\n❌ Test Error:', err.response?.errors || err.message || err);
    process.exit(1);
  }
}
console.log(\n🧪 Completed in ${(Date.now() - start) / 1000}s);
await runAllTests();
