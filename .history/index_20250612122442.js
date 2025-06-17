// index.mjs

import products from './Src/modules/products/index.js';
import productReviews from './Src/modules/productReviews/index.js';
import productByFilters from './Src/modules/productByFilters/index.js';
import productByCategory from './Src/modules/productByCategory/index.js';
import topProducts from './Src/modules/topProducts/index.js';
import offerProducts from './Src/modules/offerProducts/index.js';
import productByPrice from './Src/modules/productByPrice/index.js';
import searchProducts from './Src/modules/searchproducts/index.js';
import wishlist from './Src/modules/wishlist/index.js';
import cart from './Src/modules/cart/index.js';
import orderUpdatesModule from './Src/modules/orderUpdates/index.js';
import categoriesModule from './Src/modules/categories/index.js';
import masterCategoriesModule from './Src/modules/masterCategories/index.js';
import nestedCategoryModule from './Src/modules/nestedCategory/index.js';

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

  console.log(' Fetching Products by Category...');
  await productByCategoryModule.getProductsByCategoryController('Menswear');

  console.log(' Fetching Top Products...');
  await topProductsModule.getTopProductsController();

  console.log(' Fetching Offer Products...');
  await offerProductsModule.getOfferProductsController();

  console.log(' Fetching Products by Price...');
  await productByPriceModule.getProductsByPriceController(300, 700);

  console.log(' Searching Products...');
  await searchProductsModule.searchProductsController("shirt");

  // Wishlist
  console.log(' Fetching Wishlist...');
  await wishlistModule.getWishlistController();

  console.log('Adding to Wishlist...');
  await wishlistModule.addToWishlistController('1');

  console.log(' Removing from Wishlist...');
  await wishlistModule.removeFromWishlistController('1');

  // Cart
  console.log(' Fetching Cart...');
  await cartModule.getCartController();

  console.log(' Adding to Cart...');
  await cartModule.addToCartController('1', 2);

  console.log(' Removing from Cart...');
  await cartModule.removeFromCartController('1');

  // Order Updates
  console.log(' Starting Order Subscription...');
  orderUpdatesModule.orderUpdatesController();

  // Categories
  console.log(' Fetching Categories...');
  await categoriesModule.getCategoriesController();

  console.log(' Fetching Master Categories...');
  await masterCategoriesModule.getMasterCategoriesController();

  console.log(' Fetching Nested Categories...');
  await nestedCategoryModule.getNestedCategoryController();
};

run();
