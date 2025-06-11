const { queries, mutations } = require('./index');

async function runQueryTests() {
  console.log('--- Running Query Tests ---');
  try {
    console.log('Top Products:', await queries.fetchTopProducts());
    console.log('Categories:', await queries.fetchCategories());
    console.log('Banners:', await queries.fetchBanners());
    console.log('All Products:', await queries.fetchAllProducts());
    console.log('Promotion Offers:', await queries.fetchOfferProductsFromPromotion());
    console.log('Blogs:', await queries.fetchBlogs());
    console.log('CMS Content:', await queries.fetchCmsContent());
    console.log('CMS Site Config:', await queries.fetchSiteConfigCMS());
    console.log('Shop Site Config:', await queries.fetchSiteConfigShop());
    console.log('IP Address:', await queries.fetchIpAddress());
    console.log('Coupons:', await queries.fetchCoupons());
    console.log('Master Categories:', await queries.fetchMasterCategories());
    console.log('Nested Categories:', await queries.fetchNestedCategory());
  } catch (err) {
    console.error('❌ Query Error:', err.message);
  }

  console.log('\n--- Queries Requiring Input (manually test if needed) ---');
  console.log('// fetchProductReviews(productId)');
  console.log('// fetchProductByFilters(filters)');
  console.log('// fetchProductsByCategory(categoryId)');
  console.log('// fetchProductByPrice(priceRange)');
  console.log('// fetchSearchProducts(keyword)');
  console.log('// fetchFilteredReviews(filter)');
  console.log('// fetchAddress(userId)');
  console.log('// fetchStateByPincode(pincode)');
  console.log('// fetchCart(userId)');
  console.log('// fetchCustomerMessages()');
  console.log('// fetchOrders(userId)');
  console.log('// fetchOrderHistory(userId)');
  console.log('// fetchWishlist(userId)');
  console.log('// fetchRatings()');
  console.log('// fetchShop()');
}

async function runMutationTests() {
  console.log('\n--- Mutations Requiring Input (placeholders shown) ---');

  console.log('// addProductReview({ productId, userId, rating, comment })');
  console.log('// editProductReview({ reviewId, rating, comment })');
  console.log('// createAddress({ userId, name, phone, ... })');
  console.log('// placeOrder({ userId, cartId, addressId, ... })');
  console.log('// initiatePayment({ orderId, amount, method })');
  console.log('// createShop({ userId, shopName, domain })');
  console.log('// createCustomerMessage({ name, email, message })');

  try {
    // Example safe test to validate module structure
    if (typeof mutations === 'object') {
      console.log('✅ Mutation methods loaded. Ready for input-based testing.');
    }
  } catch (err) {
    console.error('❌ Mutation Error:', err.message);
  }
}

(async () => {
  await runQueryTests();
  await runMutationTests();
})();
