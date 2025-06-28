// index.mjs

import productsModule from './Src/modules/products/index.js';
import productReviewsModule from './src/modules/productReviews/index.js';
import productByFiltersModule from './src/modules/productByFilters/index.js';
import productByCategoryModule from './src/modules/productByCategory/index.js';
import topProductsModule from './src/modules/topProducts/index.js';
import offerProductsModule from './src/modules/offerProducts/index.js';
import productByPriceModule from './src/modules/productByPrice/index.js';
import searchProductsModule from './src/modules/searchproducts/index.js';
import wishlistModule from './src/modules/wishlist/index.js';
import cartModule from './src/modules/cart/index.js';
import orderUpdatesModule from './src/modules/orderUpdates/index.js';
import categoriesModule from './src/modules/categories/index.js';
import masterCategoriesModule from './src/modules/masterCategories/index.js';
import nestedCategoryModule from './src/modules/nestedCategory/index.js';

console.log("✅ All modules imported correctly!");


const run = async () => {
  console.log('📦 Fetching Products...');
  await productsModule.getProductsController();

  console.log('📝 Fetching Product Reviews...');
  await productReviewsModule.getReviewsController();

  console.log('🔍 Fetching Products by Filter...');
  await productByFiltersModule.getFilteredProductsController({
    category: 'Menswear',
    size: 'M',
    priceRange: { min: 300, max: 700 }
  });

  console.log('📂 Fetching Products by Category...');
  await productByCategoryModule.getProductsByCategoryController('Menswear');

  console.log('⭐ Fetching Top Products...');
  await topProductsModule.getTopProductsController();

  console.log('🔥 Fetching Offer Products...');
  await offerProductsModule.getOfferProductsController();

  console.log('💰 Fetching Products by Price...');
  await productByPriceModule.getProductsByPriceController(300, 700);

  console.log('🔎 Searching Products...');
  await searchProductsModule.searchProductsController("shirt");

  // Wishlist
  console.log('❤️ Fetching Wishlist...');
  await wishlistModule.getWishlistController();

  console.log('➕ Adding to Wishlist...');
  await wishlistModule.addToWishlistController('1');

  console.log('❌ Removing from Wishlist...');
  await wishlistModule.removeFromWishlistController('1');

  // Cart
  console.log('🛒 Fetching Cart...');
  await cartModule.getCartController();

  console.log('➕ Adding to Cart...');
  await cartModule.addToCartController('1', 2);

  console.log('❌ Removing from Cart...');
  await cartModule.removeFromCartController('1');

  // Order Updates
  console.log('🔁 Starting Order Subscription...');
  orderUpdatesModule.orderUpdatesController();

  // Categories
  console.log('🗂️ Fetching Categories...');
  await categoriesModule.getCategoriesController();

  console.log('🏷️ Fetching Master Categories...');
  await masterCategoriesModule.getMasterCategoriesController();

  console.log('🧩 Fetching Nested Categories...');
  await nestedCategoryModule.getNestedCategoryController();
};

run();
