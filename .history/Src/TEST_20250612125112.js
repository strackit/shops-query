// test.mjs

import {
  products,
  productReviews,
  productByFilters,
  productByCategory,
  topProducts,
  offerProducts,
  productByPrice,
  searchProducts,
  wishlist,
  cart,
  orderUpdates,
  categories,
  masterCategories,
  nestedCategory
} from './index.mjs';

const runTests = async () => {
  try {
    console.log('\n✅ Testing Products...');
    await products.getProductsController();

    console.log('\n✅ Testing Product Reviews...');
    await productReviews.getReviewsController();

    console.log('\n✅ Testing Filtered Products...');
    await productByFilters.getFilteredProductsController({
      category: 'T-Shirts',
      priceRange: [100, 1000]
    });

    console.log('\n✅ Testing Products By Category...');
    await productByCategory.getProductsByCategoryController('mens');

    console.log('\n✅ Testing Top Products...');
    await topProducts.getTopProductsController();

    console.log('\n✅ Testing Offer Products...');
    await offerProducts.getOfferProductsController();

    console.log('\n✅ Testing Products by Price...');
    await productByPrice.getProductsByPriceController(500);

    console.log('\n✅ Testing Search Products...');
    await searchProducts.searchProductsController('hoodie');

    console.log('\n✅ Testing Wishlist Get...');
    await wishlist.getWishlistController();

    console.log('\n✅ Testing Add to Wishlist...');
    await wishlist.addToWishlistController('1');

    console.log('\n✅ Testing Remove from Wishlist...');
    await wishlist.removeFromWishlistController('1');

    console.log('\n✅ Testing Cart Get...');
    await cart.getCartController();

    console.log('\n✅ Testing Add to Cart...');
    await cart.addToCartController('1', 2);

    console.log('\n✅ Testing Remove from Cart...');
    await cart.removeFromCartController('1');

    console.log('\n✅ Testing Order Updates...');
    orderUpdates.orderUpdatesController(); // if it's a subscription or console-based stream

    console.log('\n✅ Testing Categories...');
    await categories.getCategoriesController();

    console.log('\n✅ Testing Master Categories...');
    await masterCategories.getMasterCategoriesController();

    console.log('\n✅ Testing Nested Categories...');
    await nestedCategory.getNestedCategoryController();

    console.log('\n🎉 All tests executed!');
  } catch (error) {
    console.error('❌ Error during test execution:', error);
  }
};

runTests();
