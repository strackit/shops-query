// test.js – Main test runner for all GraphQL module tests

const testFiles = [
  './test_/categories.test.js',
  './test_/products.test.js',
  './test_/cart-fetch.test.js',
  './test_/cart-add.test.js',
  './test_/cart-remove.test.js',
  './test_/cart-update-delete.test.js',
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

const runAllTests = async () => {
  for (const file of testFiles) {
    console.log(`\nRunning test: ${file}`);
    try {
      const testModule = await import(file);

      // If a default export exists, run it
      if (typeof testModule.default === 'function') {
        await testModule.default();
      } else {
        // Otherwise, run any exported test function(s)
        const exportedTests = Object.values(testModule).filter(fn => typeof fn === 'function');
        for (const testFn of exportedTests) {
          await testFn();
        }
      }

    } catch (error) {
      console.error(`Error in ${file}:`, error.message || error);
    }
  }

  console.log('\nAll test files executed.');
};

runAllTests();
