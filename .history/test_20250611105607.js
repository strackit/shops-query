const { queries, mutations } = require('./index');

// Test Queries
async function runQueryTests() {
  try {
    console.log('--- Running Query Tests ---');

    const topProducts = await queries.fetchTopProducts();
    console.log('Top Products:', topProducts);

    const categories = await queries.fetchCategories();
    console.log('Categories:', categories);

    const banners = await queries.fetchBanners();
    console.log('Banners:', banners);

    const products = await queries.fetchAllProducts();
    console.log('All Products:', products);

    const offers = await queries.fetchOfferProductsFromPromotion();
    console.log('Promotion Offers:', offers);

    const wishlist = await queries.fetchWishlist(1); // Sample user ID
    console.log('Wishlist:', wishlist);

    const blogs = await queries.fetchBlogs();
    console.log('Blogs:', blogs);

    const cart = await queries.fetchCart(1); // Sample user ID
    console.log('Cart:', cart);

    const ratings = await queries.fetchRatings();
    console.log('Ratings:', ratings);

    const customerMessages = await queries.fetchCustomerMessages();
    console.log('Customer Messages:', customerMessages);

    const ip = await queries.fetchIpAddress();
    console.log('IP Address:', ip);

    const coupons = await queries.fetchCoupons();
    console.log('Coupons:', coupons);

    const masterCategories = await queries.fetchMasterCategories();
    console.log('Master Categories:', masterCategories);

  } catch (err) {
    console.error('❌ Error running query tests:', err.message);
  }
}

// Test Mutations
async function runMutationTests() {
  try {
    console.log('--- Running Mutation Tests ---');

    // Sample input - change based on your GraphQL schema
    const reviewInput = {
      productId: 101,
      userId: 1,
      rating: 4,
      comment: 'Great product!',
    };

    const newReview = await mutations.addProductReview(reviewInput);
    console.log('Added Review:', newReview);

    const editedReview = await mutations.editProductReview({
      reviewId: 201,
      rating: 5,
      comment: 'Updated review: excellent!',
    });
    console.log('Edited Review:', editedReview);

    const addressInput = {
      userId: 1,
      name: 'John Doe',
      phone: '9876543210',
      pincode: '600001',
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
      address: '123 Main Street',
      type: 'Home',
    };

    const address = await mutations.createAddress(addressInput);
    console.log('Created Address:', address);

    const shopInput = {
      userId: 1,
      shopName: 'Test Shop',
      domain: 'testshop.com',
    };

    const shop = await mutations.createShop(shopInput);
    console.log('Created Shop:', shop);

    const paymentInput = {
      orderId: 5001,
      amount: 299,
      method: 'UPI',
    };

    const payment = await mutations.initiatePayment(paymentInput);
    console.log('Payment Initiated:', payment);

    const orderInput = {
      userId: 1,
      cartId: 123,
      addressId: 456,
      paymentMethod: 'COD',
      couponCode: 'NEWYEAR20',
    };

    const order = await mutations.placeOrder(orderInput);
    console.log('Order Placed:', order);

    const messageInput = {
      name: 'Nincey',
      email: 'nincey@example.com',
      message: 'Need help with my recent order.',
    };

    const message = await mutations.createCustomerMessage(messageInput);
    console.log('Customer Message Submitted:', message);

  } catch (err) {
    console.error('❌ Error running mutation tests:', err.message);
  }
}

// Run All
(async () => {
  await runQueryTests();
  await runMutationTests();
})();
