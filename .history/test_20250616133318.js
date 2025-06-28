// Ensure environment variables are loaded first
import dotenv from 'dotenv';
dotenv.config();

console.log('\n🧪 Running All GraphQL Module Tests...\n');

// === Import all test modules ===
import { testAddToCart } from './test/cart-add.test.js';
import { testRemoveFromCart } from './test/cart-remove.test.js';
import { testFetchCart } from './test/cart-fetch.test.js';
import { fetchCategoriesTest } from './test/categories.test.js';
import { testMasterCategory } from './test/masterCategory.test.js';
import { testNestedCategory } from './test/nestedCategory.test.js';

import { testOfferProducts } from './test/offerProducts.test.js';
import { testProductReviews } from './test/productReviews.test.js';
import { testProducts } from './test/productsest.js';

import { wishlistFetchTest } from './test/wishlistFetchTest.js';
import { wishlistAddRemoveTest } from './test/wishlistAddRemoveTest.js';

import { testTopProducts } from './test/topProductsTest.js';
import { testProductsByCategory } from './test/productsByCategoryTest.js';
import { testProductByPrice } from './test/productByPriceTest.js';
import { testSearchProducts } from './test/searchProductsTest.js';

import { testOrderUpdates } from './test/orderUpdatesTest.js';


// === Run All Tests in Order ===
const runAllTests = async () => {
  try {
    await fetchCategoriesTest();
    await testMasterCategory();
    await testNestedCategory();

    await testOfferProducts();
    await testProductReviews();
    await testProducts();

    await testFetchCart();
    await testRemoveFromCart();

    await wishlistFetchTest();
    await wishlistAddRemoveTest();

    await testTopProducts();
    await testProductsByCategory();
    await testProductByPrice();
    await testSearchProducts();

    await testOrderUpdates();

    console.log('\n✅ All Tests Completed');
  } catch (err) {
    console.error('\n❌ Error during tests:', err.message || err);
  }
};

await runAllTests();
