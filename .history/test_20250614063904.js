// Utils
import client, { gql } from './src/utils/client.js';

// Categories
import { fetchCategoriesTest } from './test_/categories.test.js';
import { testMasterCategory} from './test_/masterCategory.test.js';
import { testNestedCategory } from './test_/nestedCategory.test.js';

// Products
import { testProducts } from './test_/products.test.js';
import { testTopProducts } from './test_/topProducts.test.js';
import {testOfferProducts } from './test_/offerProducts.test.js';
import { testProductByPrice } from './test_/prodByPrice.test.js';
import { testSearchProducts } from './test_/searchproduct.test.js';
import { testProductsByCategory } from './test_/productByCategory.test.js';
import { testProductReviews } from './test_/productReviews.test.js';

// Cart
import { testCartAdd } from './test_/cart-add.test.js';
import { testFetchCart } from './test_/cart-fetch.test.js';
import { testUpdateOrDeleteCart} from './test_/cart-update-delete.test.js'
// Wishlist
import {wishlistAddRemoveTest} from './test_/wishlist-add-remove.test.js';
import { wishlistFetchTest } from './test_/wishlist-fetch.test.js';

// Orders
import { testOrderUpdates } from './test_/orderUpdates.test.js';

// Run All Tests
const runAllTests = async () => {
  console.log('\nRunning GraphQL Module Tests...\n');

  // Categories
  await fetchCategoriesTest();
  await testMasterCategory();
await testNestedCategory();

  // Products
  await testProducts();
  await testTopProducts();
  await testOfferProducts();
  await productByPriceTest();
  await searchProductTest();
  await testProductsByCategory();
  await productReviewsTest();

  // Cart
  await testCartAdd();
  await fetchcartTest();

  // Wishlist
  await wishlistAddRemoveTest();
  await wishlistFetchTest();

  // Orders
  await orderUpdatesTest();

  console.log('\nAll tests completed.');
};

// Execute
runAllTests();
