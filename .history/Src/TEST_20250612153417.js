// test.js - Universal Module Tester

import products from './src/modules/products/index.js';
import productByCategory from './src/modules/productByCategory/index.js';
import productByFilters from './src/modules/productByFilters/index.js';
import productByPrice from './src/modules/productByPrice/index.js';
import topProducts from './src/modules/topProducts/index.js';
import offerProducts from './src/modules/offerProducts/index.js';
import productReviews from './src/modules/productReviews/index.js';
import wishlist from './src/modules/wishlist/index.js';
import cart from './src/modules/cart/index.js';
import categories from './src/modules/categories/index.js';
import orderUpdates from './src/modules/orderUpdates/index.js'; // Only subscription
import searchProducts from './src/modules/searchProducts/index.js';

const runAllTests = async () => {
  console.log('\n🚀 Starting GraphQL Module Tests...\n');

  // PRODUCTS
  console.log('\n🛍️ Products Test');
  await products.getProductsController();
  await products.updateProductController("PRODUCT_ID", { name: "Updated", price: 999 });

  // CATEGORY FILTERS
  console.log('\n📁 Products by Category Test');
  await productByCategory.getProductsByCategoryController("T-Shirts");

  console.log('\n🧮 Products by Filters Test');
  await productByFilters.getProductsByFiltersController({ category: "Shoes", size: "M" });

  console.log('\n💸 Products by Price Range Test');
  await productByPrice.getProductsByPriceController(500, 1500);

  // TOP / OFFER PRODUCTS
  console.log('\n📊 Top Products Test');
  await topProducts.getTopProductsController();

  console.log('\n🔥 Offer Products Test');
  await offerProducts.getOfferProductsController();

  // REVIEWS
  console.log('\n📝 Product Reviews Test');
  await productReviews.getReviewsController();
  await productReviews.addReviewController({ productId: "PRODUCT_ID", rating: 5, comment: "Awesome", reviewer: "User1" });
  await productReviews.editReviewController("REVIEW_ID", { rating: 4, comment: "Updated Review", reviewer: "User1" });

  // WISHLIST
  console.log('\n💖 Wishlist Test');
  await wishlist.getWishlistController();
  await wishlist.addToWishlistController("PRODUCT_ID");
  await wishlist.removeFromWishlistController("WISHLIST_ITEM_ID");

  // CART
  console.log('\n🛒 Cart Test');
  await cart.getCartController();
  await cart.addToCartController({ productId: "PRODUCT_ID", quantity: 2 });
  await cart.removeFromCartController("CART_ITEM_ID");

  // CATEGORIES
  console.log('\n📂 Category Test');
  await categories.getCategoriesController();
  await categories.getMasterCategoriesController();
  await categories.getNestedCategoryController("T-Shirts");

  // SEARCH
  console.log('\n🔍 Search Products Test');
  await searchProducts.searchProductsController("shirt");

  // SUBSCRIPTION
  console.log('\n🔔 Subscribing to Order Updates (WebSocket)...');
  orderUpdates.listenToOrderUpdates((update) => {
    console.log('🆕 Order Update:', update);
  });

  console.log('\n✅ All tests invoked. Await WebSocket responses where applicable.\n');
};

runAllTests();
