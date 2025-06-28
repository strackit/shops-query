// Main index.mjs
import products from './rc/modules/products/index.js';
import productReviews from './src/modules/productReviews/index.js';
import productByFilters from './src/modules/productByFilters/index.js';
import productByCategory from './src/modules/productByCategory/index.js';
import topProducts from './src/modules/topProducts/index.js';
import offerProducts from './src/modules/offerProducts/index.js';
import productByPrice from './src/modules/productByPrice/index.js';
import searchProducts from './src/modules/searchproducts/index.js';
import wishlist from './src/modules/wishlist/index.js';
import cart from './src/modules/cart/index.js';
import orderUpdates from './src/modules/orderUpdates/index.js';
import categories from './src/modules/categories/index.js';
import masterCategories from './src/modules/masterCategories/index.js';
import nestedCategory from './src/modules/nestedCategory/index.js';

// Export all modules
export {
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
};

// Optional testing logic
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    console.log(' Fetching products...');
    await products.getProductsController();

    console.log(' Fetching product reviews...');
    await productReviews.getReviewsController();

    console.log(' Filtering products...');
    await productByFilters.getFilteredProductsController({
      category: 'T-Shirts',
      priceRange: [200, 1000]
    });

    console.log(' Fetching products by category...');
    await productByCategory.getProductsByCategoryController('mens');

    console.log(' Fetching top products...');
    await topProducts.getTopProductsController();

    console.log(' Fetching offer products...');
    await offerProducts.getOfferProductsController();

    console.log(' Fetching products by price...');
    await productByPrice.getProductsByPriceController(500);

    console.log(' Searching products...');
    await searchProducts.searchProductsController('shirt');

    console.log(' Fetching wishlist...');
    await wishlist.getWishlistController();

    console.log(' Adding to wishlist...');
    await wishlist.addToWishlistController('1');

    console.log(' Removing from wishlist...');
    await wishlist.removeFromWishlistController('1');

    console.log('Fetching cart...');
    await cart.getCartController();

    console.log('Adding to cart...');
    await cart.addToCartController('1', 2);

    console.log(' Removing from cart...');
    await cart.removeFromCartController('1');

    console.log(' Subscribing to order updates...');
    orderUpdates.orderUpdatesController(); // assumed to be a subscription, not async

    console.log(' Fetching categories...');
    await categories.getCategoriesController();

    console.log(' Fetching master categories...');
    await masterCategories.getMasterCategoriesController();

    console.log(' Fetching nested categories...');
    await nestedCategory.getNestedCategoryController();
  })();
}
