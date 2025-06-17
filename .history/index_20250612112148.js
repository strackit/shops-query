import products from './Src/modules/products/index.js';
import productReviews from './Src/modules/productReviews/index.js';
import productByFilters from './Src/modules/productByFilters/index.js';
import productByCategory from './Src/modules/productByCategory/index.js';
import topProductsModule from './Src/modules/topProducts/index.js';
import offerProductsModule from './Src/modules/offerProducts/index.js';
import productByPriceModule from './Src/modules/productByPrice/index.js';
import searchProductsModule from './Src/modules/searchproducts/index.js';
import wishlistModule from './Src/modules/wishlist/index.js';
import cartModule from './Src/modules/cart/index.js';
import orderUpdatesModule from './Src/modules/orderUpdates/index.js';
import categoriesModule from './Src/modules/categories/index.js';
import masterCategoriesModule from './Src/modules/masterCategories/index.js';
import nestedCategoryModule from './Src/modules/nestedCategory/index.js';

const run = async () => {
  // Existing flows...
  console.log(' Fetching Products...');
  await productsModule.getProductsController();

  console.log(' Fetching Product Reviews...');
  await productReviewsModule.getReviewsController();

  // ...others omitted for brevity

  console.log(' Searching Products...');
  await searchProductsModule.searchProductsController("shirt");

  // New flows — wishlist
  console.log(' Fetching Wishlist...');
  await wishlistModule.getWishlistController();

  console.log(' Adding to Wishlist...');
  await wishlistModule.addToWishlistController('1');

  console.log(' Removing from Wishlist...');
  await wishlistModule.removeFromWishlistController('1');

  // New flows — cart
  console.log(' Fetching Cart...');
  await cartModule.getCartController();

  console.log(' Adding to Cart...');
  await cartModule.addToCartController('1', 2);

  console.log(' Removing from Cart...');
  await cartModule.removeFromCartController('1');

  // Order Updates (subscription)
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
