import dotenv from 'dotenv';
dotenv.config();

import graphqlModules from './index.js';

console.log('\n🧪 Running All GraphQL Module Tests…\n');

async function runAllTests() {
  const gm = graphqlModules;
  const shopId = 12; // 🔹 Use this throughout for consistency
  const userId = 1;
  const productId = 1;

  try {
    console.log('\n🔹 Categories');
    console.log(await gm.categories.getCategoriesController(shopId));

    console.log('\n🔹 Master Categories');
    console.log(await gm.masterCategories.getMasterCategoriesController(shopId));

    console.log('\n🔹 Nested Categories');
    console.log(await gm.nestedCategory.getNestedCategoryController(shopId));

    console.log('\n🔹 Offer Products');
    console.log(await gm.offerProducts.getOfferProductsController(shopId));

    console.log('\n🔹 Product Reviews');
    console.log(await gm.productReviews.getReviewsController(productId));

    console.log('\n🔹 Get Products');
    console.log(await gm.products.getProductsController(shopId));

    console.log('\n🔹 Cart - Add');
    console.log(await gm.cart.addToCart({
      productId,
      shopId,
      userId,
      quantity: 2,
    }));

    console.log('\n🔹 Cart - Fetch');
    console.log(await gm.cart.fetchCart(userId));

    console.log('\n🔹 Cart - Remove');
    console.log(await gm.cart.removeFromCart({
      productId,
      shopId,
      userId,
      update: false,
      quantity: 1,
    }));

    console.log('\n🔹 Wishlist - Fetch');
    console.log(await gm.wishlist.getWishlistController({ userId }));

    console.log('\n🔹 Wishlist - Add');
    console.log(await gm.wishlist.addToWishlistController(productId, shopId, userId));

    console.log('\n🔹 Wishlist - Remove');
    console.log(await gm.wishlist.removeFromWishlistController({ userId, productId, shopId }));

    console.log('\n🔹 Top Products');
    console.log(await gm.topProducts.getTopProductsController(shopId));

    console.log('\n🔹 Products by Category');
    console.log(await gm.productByCategory.getProductsByCategoryController(1));

    console.log('\n🔹 Products by Filters');
    console.log(await gm.productByFilters.getProductsByFiltersController({ shopId, userId }));

    console.log('\n🔹 Products by Price');
    console.log(await gm.productByPrice.getProductsByPriceController(100, 500, shopId));

    console.log('\n🔹 Search Products');
    console.log(await gm.searchproducts.searchProductsController('shoe', shopId));

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
