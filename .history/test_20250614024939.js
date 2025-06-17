const test_ = [
  { file: './test_/categories.test.js', fn: 'fetchCategoriesTest' },
  { file: './test_/products.test.js', fn: 'productsTest' },
  { file: './test_/cart-fetch.test.js', fn: 'fetchcartTest' },
  { file: './test_/cart-add.test.js', fn: 'testCartAdd' },
  { file: './test_/cart-update-delete.test.js', fn: 'updateOrDeleteCartTest' },
  { file: './test_/wishlist-fetch.test.js', fn: 'wishlistFetchTest' },
  { file: './test_/wishlist-add-remove.test.js', fn: 'wishlistAddRemoveTest' },
  { file: './test_/orderUpdates.test.js', fn: 'orderUpdatesTest' },
  { file: './test_/productReview.test.js', fn: 'productReviewsTest' },
  // Add other test files similarly with their export names
];

(async () => {
  for (const { file, fn } of testFiles) {
    console.log(`\nRunning test: ${file}`);
    try {
      const module = await import(file);
      if (typeof module[fn] === 'function') {
        await module[fn]();
      } else {
        console.warn(`Function ${fn} not found in ${file}`);
      }
    } catch (error) {
      console.error(`Error in ${file}:`, error.message || error);
    }
  }

  console.log('\nAll test files executed.\n');
})();
