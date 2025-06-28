// utils
import client, { gql } from './src/utils/client.js';

// Categories
import { fetchCategoriesTest } from './test_categories.test.js';
import { masterCategoryTest } from './test/masterCategory.test.js';
import { nestedCategoryTest } from './tests/nestedCategory.test.js';

// Products
import { productsTest } from './tests/products.test.js';
import { topProductsTest } from './tests/topProducts.test.js';
import { offerProductsTest } from './tests/offerProducts.test.js';
import { productByPriceTest } from './tests/productByPrice.test.js';
import { searchProductTest } from './tests/searchProduct.test.js';
import { testProductsByCategory } from './tests/productByCategory.test.js'; // you just asked for this
import { productReviewsTest } from './tests/productReviews.test.js';

// Cart
import { testCartAdd } from './tests/cartAdd.test.js';
import { fetchcartTest } from './tests/fetchCart.test.js';

// Order
import { orderUpdatesTest } from './tests/orderUpdates.test.js';

// ==== Test Runner Function ====

const runAllTests = async () => {
  console.log(' Running GraphQL Module Tests...\n');

  await fetchCategoriesTest();
  await masterCategoryTest();
  await nestedCategoryTest();

  await productsTest();
  await topProductsTest();
  await offerProductsTest();
  await productByPriceTest();
  await searchProductTest();
  await testProductsByCategory();
  await productReviewsTest();

  await testCartAdd();
  await fetchcartTest();

  await orderUpdatesTest();

  console.log('\nAll tests completed.');
};

// Execute
runAllTests();
