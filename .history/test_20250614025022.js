import { testCartAdd } from './test_/cart-add.test.js';
import { fetchcartTest } from './test_/cart-fetch.test.js';
import { updateOrDeleteCartTest } from './test_/cart-update-delete.test.js';
import { fetchCategoriesTest } from './test_/categories.test.js';
import { orderUpdatesTest } from './test_/orderUpdates.test.js';
import { productReviewsTest } from './test_/productReview.test.js';
import { productsTest } from './test_/products.test.js';
import { wishlistAddRemoveTest } from './test_/wishlist-add-remove.test.js';
import { wishlistFetchTest } from './test_/wishlist-fetch.test.js';

const runAllTests = async () => {
  await fetchCategoriesTest();
  await productsTest();
  await productReviewsTest();
  await wishlistAddRemoveTest();
  await wishlistFetchTest();
  await testCartAdd();
  await fetchcartTest();
  await updateOrDeleteCartTest();
  await orderUpdatesTest();
};

runAllTests();
