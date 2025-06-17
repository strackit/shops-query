// index.js (Global Test Entry)

import wishlist from './modules/wishlist/index.js';
import cart from './modules/cart/index.js';
import categories from './modules/categories/index.js';
import masterCategories from './modules/masterCategories/index.js';
import nestedCategory from './modules/nestedCategory/index.js';
import products from './modules/products/index.js';
import productReviews from './modules/productReviews/index.js';
import offerProducts from './modules/offerProducts/index.js';
import topProducts from './modules/topProducts/index.js';
// Add other modules similarly...

const testApp = async () => {
  console.log('🚀 Running GraphQL Module Tests...\n');

  // === Example: Test Wishlist ===
  await wishlist.getWishlistController();
  await wishlist.addToWishlistController("prod-id-123"); // test with real ID
  await wishlist.removeFromWishlistController("wishlist-id-456");

  // === Example: Test Cart ===
  await cart.getCartController();
  await cart.addToCartController("prod-id-123", 2);
  await cart.removeFromCartController("cart-item-id");

  // === Example: Test Categories ===
  await categories.getCategoriesController();
  await masterCategories.getMasterCategoriesController();
  await nestedCategory.getNestedCategoryController();

  // === Example: Product Reviews ===
  await productReviews.getReviewsController();
  await productReviews.addReviewController({
    productId: 'prod-id-123',
    rating: 5,
    comment: 'Excellent!',
    reviewer: 'Nincy'
  });
  await productReviews.editReviewController('review-id', {
    productId: 'prod-id-123',
    rating: 4,
    comment: 'Updated review!',
    reviewer: 'Nincy'
  });

  // === Example: Fetch Offer and Top Products ===
  await offerProducts.getOfferProductsController();
  await topProducts.getTopProductsController();

  console.log('\n✅ All Test Executions Completed');
};

testApp().catch((err) => {
  console.error('❌ Global Test Error:', err);
});
