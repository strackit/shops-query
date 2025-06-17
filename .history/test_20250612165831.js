// test.js
import modules from './index.js';

const runTests = async () => {
  try {
    console.log(' Starting Tests...\n');

    // Products
    console.log(' All Products:');
    const allProducts = await modules.products.getProductsController();
    console.log(allProducts);

    // Products by Category
    console.log('\n Products in Category "T-Shirts":');
    const categoryProducts = await modules.productByCategory.getProductsByCategoryController('T-Shirts');
    console.log(categoryProducts);

    // Products by Filters
    console.log('\n Products by Filters:');
    const filtered = await modules.productByFilters.getProductsByFiltersController({
      category: 'T-Shirts',
      priceRange: { min: 300, max: 1000 },
    });
    console.log(filtered);

    // Products by Price
    console.log('\n Products by Price:');
    const priceProducts = await modules.productByPrice.getProductsByPriceController(500, 1000);
    console.log(priceProducts);

    // Top Products
    console.log('\n Top Products:');
    const top = await modules.topProducts.getTopProductsController();
    console.log(top);

    // Product Reviews
    console.log('\n📝 Product Reviews:');
    const reviews = await modules.productReviews.getReviewsController();
    console.log(reviews);

    // Wishlist
    console.log('\n💖 Wishlist:');
    const wish = await modules.wishlist.getWishlistController();
    console.log(wish);

    // Add more test cases here...

    console.log('\n🎉 All tests completed successfully!');
  } catch (error) {
    console.error('❌ Error during tests:', error);
  }
};

runTests();
