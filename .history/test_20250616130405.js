// test.js

import testAddToCart from './test_/cart-add.test.js';
import testFetchCart from './test_/cart-fetch.test.js';
import testRemoveFromCart from './test_/cart-remove.test.js';
import fetchCategoriesTest from './test_/categories.test.js';
import testMasterCategory from './test_/masterCategory.test.js';
import nestedCategoryTest from '.test_/nestedCategory.test.js';
import offerProducts from './test_/offerProducts.test.js';
import orderUpdates from '';
// ... import other test files here ...

async function runAllTests() {
  await testAddToCart();
  await testFetchCart();
  await testRemoveFromCart();
  await fetchCategoriesTest();
  await testMasterCategory();
  await testNestedCategory();
  await testOfferProducts();
  await testOrderUpdates();


  // ... call all other test functions ...
}

runAllTests()
  .then(() => console.log('\n✅ All tests completed'))
  .catch(err => {
    console.error('\n❌ Test suite failed');
    console.error(err);
    process.exit(1);
  });
