import { testCartAdd } from './test_/cart-add.test.js';
import { testFetchCart } from './test_/cart-fetch.test.js';
import { testNestedCategory } from './test_/nestedCategory.test.js';
import { testProductsByCategory } from './test_/productByCategory.test.js';
import { wishlistAddRemoveTest } from './test_/wishlist-add-remove.test.js';
import { wishlistFetchTest } from './test_/wishlist-fetch.test.js';

// Entry point to run all tests
const runAllTests = async () => {
  console.log(' Starting Test Suite...\n');

  await testCartAdd();
  await testFetchCart();
  await testNestedCategory();
  await testProductsByCategory();
  await wishlistAddRemoveTest();
  await wishlistFetchTest();

  console.log('\n All Tests Executed.');
};

runAllTests();
