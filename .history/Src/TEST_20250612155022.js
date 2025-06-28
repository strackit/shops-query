// test.js
import products from './Src/modules/products/index.js';
import productByCategory from './Src/modules/productByCategory/index.js';
import productByFilters from './Src/modules/productByFilters/index.js';
import productByPrice from './Src/modules/productByPrice/index.js';
import topProducts from './src/modules/topProducts/index.js';
import offerProducts from './src/modules/offerProducts/index.js';
import searchProducts from './src/modules/searchProducts/index.js';

import productReviews from './src/modules/productReviews/index.js';

import wishlist from './src/modules/wishlist/index.js';
import cart from './src/modules/cart/index.js';

import categories from './src/modules/categories/index.js';
import masterCategories from './src/modules/masterCategories/index.js';
import nestedCategory from './src/modules/nestedCategory/index.js';

const runTests = async () => {
  try {
    console.log(' Starting All GraphQL Module Tests...\n');

    // 🔹 PRODUCTS
    console.log(' Products:');
    const allProducts = await products.getProductsController();
    console.log(allProducts);

    console.log('\n Products by Category (T-Shirts):');
    const catProducts = await productByCategory.getProductsByCategoryController('T-Shirts');
    console.log(catProducts);

    console.log('\n Products by Filters (e.g., price > 500):');
    const filtered = await productByFilters.getProductsByFiltersController({
      price: { gt: 500 }
    });
    console.log(filtered);

    console.log('\n Products by Price (₹100 - ₹1000):');
    const byPrice = await productByPrice.getProductsByPriceController(100, 1000);
    console.log(byPrice);

    console.log('\n Top Products:');
    const tops = await topProducts.getTopProductsController();
    console.log(tops);

    console.log('\n Offer Products:');
    const offers = await offerProducts.getOfferProductsController();
    console.log(offers);

    console.log('\n Search Products ("shirt"):');
    const search = await searchProducts.searchProductsController('shirt');
    console.log(search);

    // 🔹 REVIEWS
    console.log('\n Product Reviews:');
    const reviews = await productReviews.getReviewsController();
    console.log(reviews);

    console.log('\nAdd Review:');
    const newReview = await productReviews.addReviewController({
      productId: '1',
      rating: 5,
      comment: 'Awesome!',
      reviewer: 'Test User'
    });
    console.log(newReview);

    console.log('\n Edit Review:');
    const editedReview = await productReviews.editReviewController('1', {
      rating: 4,
      comment: 'Still great!',
      reviewer: 'Test User Updated'
    });
    console.log(editedReview);

    // 🔹 WISHLIST
    console.log('\n Wishlist:');
    const wish = await wishlist.getWishlistController();
    console.log(wish);

    console.log('\n Add to Wishlist:');
    const addedWish = await wishlist.addToWishlistController('1');
    console.log(addedWish);

    console.log('\n Remove from Wishlist:');
    const removedWish = await wishlist.removeFromWishlistController(addedWish.id);
    console.log(removedWish);

    // 🔹 CART
    console.log('\n Cart:');
    const cartItems = await cart.getCartController();
    console.log(cartItems);

    console.log('\n Add to Cart:');
    const addedCart = await cart.addToCartController({ productId: '1', quantity: 2 });
    console.log(addedCart);

    console.log('\n Remove from Cart:');
    const removedCart = await cart.removeFromCartController(addedCart.id);
    console.log(removedCart);

    // 🔹 CATEGORIES
    console.log('\n Categories:');
    const cats = await categories.getCategoriesController();
    console.log(cats);

    console.log('\n Master Categories:');
    const masters = await masterCategories.getMasterCategoriesController();
    console.log(masters);

    console.log('\n Nested Categories:');
    const nested = await nestedCategory.getNestedCategoryController();
    console.log(nested);

    console.log('\n ALL MODULE TESTS COMPLETED SUCCESSFULLY!');
  } catch (err) {
    console.error(' Error running test:', err);
  }
};

runTests();
