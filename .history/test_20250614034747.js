// Utils
import client, { gql } from './src/utils/client.js';

// Categories
import { fetchCategoriesTest } from './test_/categories.test.js';
import { masterCategoryTest } from './test_/masterCategory.test.js';
import { nestedCategoryTest } from './test_/nestedCategory.test.js';

// Products
import { productsTest } from './test_/products.test.js';
import { topProductsTest } from './test_/topProducts.test.js';
import { offerProductsTest } from './test_/offerProducts.test.js';
import { productByPriceTest } from './test_/prodByPrice.test.js';
import { searchProductTest } from './test_/searchproduct.test.js';
import { testProductsByCategory } from './test_/productByCategory.test.js';
import { productReviewsTest } from './test_/productReviews.test.js';

// Cart
import { testCartAdd } from './test_/cart-add.test.js';
import { fetchcartTest } from './test_/cart-fetch.test.js';
import { testUpdateOrDeleteCart} from './test_/cart-update-delete.test.js'
// Wishlist
import { wishlistAddRemoveTest } from './test_wishlistAddRemove.test.js';
import { wishlistFetchTest } from './test_wishlistFetch.test.js';

// Orders
import { orderUpdatesTest } from './test_orderUpdates.test.js';

// Run All Tests
const runAllTests = async () => {
  console.log('\nRunning GraphQL Module Tests...\n');

  // Categories
  await fetchCategoriesTest();
  await masterCategoryTest();
  await nestedCategoryTest();

  // Products
  await productsTest();
  await topProductsTest();
  await offerProductsTest();
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
