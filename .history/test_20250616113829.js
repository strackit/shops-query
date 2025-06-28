// test.js

import testAddToCart from './test_/cart-add.test.js';
import testFetchCart from './test_/cart-fetch.test.js';
// ... import other test files here ...

async function runAllTests() {
  await testAddToCart();
  await testFetchCart();
  // ... call all other test functions ...
}

runAllTests()
  .then(() => console.log('\n✅ All tests completed'))
  .catch(err => {
    console.error('\n❌ Test suite failed');
    console.error(err);
    process.exit(1);
  });
