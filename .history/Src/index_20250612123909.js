
import {modu}
import products from './modules/products/index.js';
import productReviews from './modules/productReviews/index.js';
import productByFilters from './modules/productByFilters/index.js';
import productByCategory from './modules/productByCategory/index.js';
import topProducts from './modules/topProducts/index.js';
import offerProducts from './modules/offerProducts/index.js';
import productByPrice from './modules/productByPrice/index.js';
import searchProducts from './modules/searchproducts/index.js';
import wishlist from './modules/wishlist/index.js';
import cart from './modules/cart/index.js';
import orderUpdates from './modules/orderUpdates/index.js';
import categories from './modules/categories/index.js';
import masterCategories from './modules/masterCategories/index.js';
import nestedCategory from './modules/nestedCategory/index.js';

console.log("All modules imported correctly!");


const run = async () => {
  console.log(' Fetching Products...');
  await products.getProductsController();

  console.log(' Fetching Product Reviews...');
  await productReviews.getReviewsController();

  console.log(' Fetching Products by Filter...');
  await productByFilters.getFilteredProductsController({
    category: 'Menswear',
    size: 'M',
    priceRange: { min: 300, max: 700 }
  });

  console.log(' Fetching Products by Category...');
  await productByCategory.getProductsByCategoryController('Menswear');

  console.log(' Fetching Top Products...');
  await topProducts.getTopProductsController();

  console.log(' Fetching Offer Products...');
  await offerProducts.getOfferProductsController();

  console.log(' Fetching Products by Price...');
  await productByPrice.getProductsByPriceController(300, 700);

  console.log(' Searching Products...');
  await searchProducts.searchProductsController("shirt");

  // Wishlist
  console.log(' Fetching Wishlist...');
  await wishlist.getWishlistController();

  console.log('Adding to Wishlist...');
  await wishlist.addToWishlistController('1');

  console.log(' Removing from Wishlist...');
  await wishlist.removeFromWishlistController('1');

  // Cart
  console.log(' Fetching Cart...');
  await cart.getCartController();

  console.log(' Adding to Cart...');
  await cart.addToCartController('1', 2);

  console.log(' Removing from Cart...');
  await cart.removeFromCartController('1');

  // Order Updates
  console.log(' Starting Order Subscription...');
  orderUpdates.orderUpdatesController();

  // Categories
  console.log(' Fetching Categories...');
  await categories.getCategoriesController();

  console.log(' Fetching Master Categories...');
  await masterCategories.getMasterCategoriesController();

  console.log(' Fetching Nested Categories...');
  await nestedCategory.getNestedCategoryController();
};

run();

export default {
  products,
  productByCategory,
  productByFilters,
  productByPrice,
  productReviews,
  cart,
  categories,
  masterCategories,
  nestedCategory,
  offerProducts,
  orderUpdates,
  searchProducts,
  topProducts,
  wishlist,

};