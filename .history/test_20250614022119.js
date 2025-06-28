// test.js (Main runner to execute all test files in test_/)

const testFiles = [
  './test_/categories.test.js',
  './test_/products.test.js',
  './test_/cart-fetch.test.js',
  './test_/cart-add.test.js',
  './test_/cart-remove.test.js',
  './test_/wishlist-fetch.test.js',
  './test_/wishlist-add-remove.test.js',
  './test_/orderUpdates.test.js',
  './test_/productReview.test.js',
  './test_/searchProduct.test.js',
  './test_/productByPrice.test.js',
  './test_/productByFilters.test.js',
  './test_/offerProducts.test.js',
  './test_/topProducts.test.js',
  './test_/productByCategory.test.js',
  './test_/nestedCategory.test.js',
  './test_/masterCategory.test.js'
];

// Main async function to run each test file
(async () => {
  for (const file of testFiles) {
    console.log(`\n🧪 Running test: ${file}`);
    try {
      // Dynamically import and execute each test file
      await import(file);
    } catch (error) {
      console.error(`❌ Error in ${file}:`, error.message || error);
    }
  }

  console.log('\n✅ All test files executed.\n');
})();
