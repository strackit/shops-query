// index.js
const { gql } = require('@apollo/client/core');
const client = require('./client');

// Product-related Queries
const PRODUCT_REVIEWS_QUERY = require('./queries/productReviews');
const PRODUCT_BY_FILTERS_QUERY = require('./queries/productByFilters');
const PRODUCTS_BY_CATEGORY_QUERY = require('./queries/productByCategory');
const TOP_PRODUCTS_QUERY = require('./queries/topProducts');
const OFFER_PRODUCTS_QUERY = require('./queries/offerProducts');
const PRODUCT_BY_PRICE_QUERY = require('./queries/productByPrice');
const SEARCH_PRODUCTS_QUERY = require('./queries/searchProducts');
const PRODUCTS_QUERY = require('./queries/products');

// Ratings Queries & Mutations
const {
  GET_RATINGS,
  GET_REVIEW_FILTERED,
  ADD_REVIEW_MUTATION,
  EDIT_REVIEW_MUTATION,
} = require('./queries/ratings');

// Address Queries & Mutations
const {
  GET_ADDRESS,
  GET_STATE_BY_PINCODE,
  CREATE_ADDRESS,
} = require('./queries/address');

// Banner
const GET_BANNERS = require('./queries/banner');

// Blog
const GET_BLOGS = require('./queries/blog');

// Cart
const CART_QUERY = require('./queries/cart');

// Categories
const CATEGORIES_QUERY = require('./queries/categories');

// CMS
const {
  GET_CMS_CONTENT,
  GET_SITE_CONFIG: GET_SITE_CONFIG_CMS,
} = require('./queries/cms');

// Customer Support
const {
  GET_CUSTOMER_MESSAGES,
  CREATE_CUSTOMER_MESSAGE,
} = require('./queries/customerSupport');

// IP Address
const GET_IP_ADDRESS = require('./queries/ipaddress');

// Master Categories
const MASTER_CATEGORIES_QUERY = require('./queries/masterCategories');

// Nested Category
const NESTED_CATEGORY_QUERY = require('./queries/nestedCategory');

// Orders
const {
  GET_ORDERS,
  GET_ORDER_HISTORY,
  GET_ORDER_MASTER,
  GET_USER_ORDER_DETAILS,
  PLACE_ORDER,
  ORDER_BY_CART,
  CANCEL_ORDER,
} = require('./queries/orders');

// Payment
const {
  INITIATE_PAYMENT,
  CHECK_PAYMENT_STATUS,
} = require('./queries/payment');

// Promotion
const {
  GET_COUPONS,
  GET_OFFER_PRODUCTS,
} = require('./queries/promotion');

// Shop
const {
  GET_SHOP,
  GET_SITE_CONFIG: GET_SITE_CONFIG_SHOP,
  CREATE_SHOP,
} = require('./queries/shop');

// Wishlist
const WISHLIST_QUERY = require('./queries/wishList');

// QUERY FUNCTIONS
const fetchProductReviews = async (productId) => {
  const { data } = await client.query({ query: PRODUCT_REVIEWS_QUERY, variables: { productId } });
  return data.productReviews;
};

const fetchProductByFilters = async (filters) => {
  const { data } = await client.query({ query: PRODUCT_BY_FILTERS_QUERY, variables: { filters } });
  return data.productByFilters;
};

const fetchProductsByCategory = async (categoryId) => {
  const { data } = await client.query({ query: PRODUCTS_BY_CATEGORY_QUERY, variables: { categoryId } });
  return data.productsByCategory;
};

const fetchTopProducts = async () => {
  const { data } = await client.query({ query: TOP_PRODUCTS_QUERY });
  return data.topProducts;
};

const fetchOfferProducts = async () => {
  const { data } = await client.query({ query: OFFER_PRODUCTS_QUERY });
  return data.offerProducts;
};

const fetchProductByPrice = async (priceRange) => {
  const { data } = await client.query({ query: PRODUCT_BY_PRICE_QUERY, variables: { priceRange } });
  return data.productByPrice;
};

const fetchSearchProducts = async (keyword) => {
  const { data } = await client.query({ query: SEARCH_PRODUCTS_QUERY, variables: { keyword } });
  return data.searchProducts;
};

const fetchAllProducts = async () => {
  const { data } = await client.query({ query: PRODUCTS_QUERY });
  return data.products;
};

const fetchRatings = async () => {
  const { data } = await client.query({ query: GET_RATINGS });
  return data.ratings;
};

const fetchFilteredReviews = async (filter) => {
  const { data } = await client.query({ query: GET_REVIEW_FILTERED, variables: { filter } });
  return data.reviews;
};

const fetchAddress = async (userId) => {
  const { data } = await client.query({ query: GET_ADDRESS, variables: { userId } });
  return data.addresses;
};

const fetchStateByPincode = async (pincode) => {
  const { data } = await client.query({ query: GET_STATE_BY_PINCODE, variables: { pincode } });
  return data.state;
};

const createAddress = async (input) => {
  const { data } = await client.mutate({ mutation: CREATE_ADDRESS, variables: { input } });
  return data.createAddress;
};

const fetchBanners = async () => {
  const { data } = await client.query({ query: GET_BANNERS });
  return data.banners;
};

const fetchBlogs = async () => {
  const { data } = await client.query({ query: GET_BLOGS });
  return data.blogs;
};

const fetchCart = async (userId) => {
  const { data } = await client.query({ query: CART_QUERY, variables: { userId } });
  return data.cart;
};

const fetchCategories = async () => {
  const { data } = await client.query({ query: CATEGORIES_QUERY });
  return data.categories;
};

const fetchCmsContent = async () => {
  const { data } = await client.query({ query: GET_CMS_CONTENT });
  return data.cmsContent;
};

const fetchSiteConfigCMS = async () => {
  const { data } = await client.query({ query: GET_SITE_CONFIG_CMS });
  return data.siteConfig;
};

const fetchCustomerMessages = async () => {
  const { data } = await client.query({ query: GET_CUSTOMER_MESSAGES });
  return data.customerMessages;
};

const createCustomerMessage = async (input) => {
  const { data } = await client.mutate({ mutation: CREATE_CUSTOMER_MESSAGE, variables: { input } });
  return data.createCustomerMessage;
};

const fetchIpAddress = async () => {
  const { data } = await client.query({ query: GET_IP_ADDRESS });
  return data.ipAddress;
};

const fetchMasterCategories = async () => {
  const { data } = await client.query({ query: MASTER_CATEGORIES_QUERY });
  return data.masterCategories;
};

const fetchNestedCategory = async () => {
  const { data } = await client.query({ query: NESTED_CATEGORY_QUERY });
  return data.nestedCategories;
};

const fetchOrders = async (userId) => {
  const { data } = await client.query({ query: GET_ORDERS, variables: { userId } });
  return data.orders;
};

const fetchOrderHistory = async (userId) => {
  const { data } = await client.query({ query: GET_ORDER_HISTORY, variables: { userId } });
  return data.orderHistory;
};

const placeOrder = async (input) => {
  const { data } = await client.mutate({ mutation: PLACE_ORDER, variables: { input } });
  return data.placeOrder;
};

const initiatePayment = async (input) => {
  const { data } = await client.mutate({ mutation: INITIATE_PAYMENT, variables: { input } });
  return data.initiatePayment;
};

const checkPaymentStatus = async (input) => {
  const { data } = await client.query({ query: CHECK_PAYMENT_STATUS, variables: { input } });
  return data.checkPaymentStatus;
};

const fetchCoupons = async () => {
  const { data } = await client.query({ query: GET_COUPONS });
  return data.coupons;
};

const fetchOfferProductsFromPromotion = async () => {
  const { data } = await client.query({ query: GET_OFFER_PRODUCTS });
  return data.offerProducts;
};

const fetchShop = async () => {
  const { data } = await client.query({ query: GET_SHOP });
  return data.shop;
};

const fetchSiteConfigShop = async () => {
  const { data } = await client.query({ query: GET_SITE_CONFIG_SHOP });
  return data.siteConfig;
};

const createShop = async (input) => {
  const { data } = await client.mutate({ mutation: CREATE_SHOP, variables: { input } });
  return data.createShop;
};

const fetchWishlist = async (userId) => {
  const { data } = await client.query({ query: WISHLIST_QUERY, variables: { userId } });
  return data.wishlist;
};

const addProductReview = async (input) => {
  const { data } = await client.mutate({ mutation: ADD_REVIEW_MUTATION, variables: { input } });
  return data.addReview;
};

const editProductReview = async (input) => {
  const { data } = await client.mutate({ mutation: EDIT_REVIEW_MUTATION, variables: { input } });
  return data.editReview;
};

module.exports = {
  client,
  gql,
  queries: {
    fetchProductReviews,
    fetchProductByFilters,
    fetchProductsByCategory,
    fetchTopProducts,
    fetchOfferProducts,
    fetchProductByPrice,
    fetchSearchProducts,
    fetchAllProducts,
    fetchRatings,
    fetchFilteredReviews,
    fetchAddress,
    fetchStateByPincode,
    fetchBanners,
    fetchBlogs,
    fetchCart,
    fetchCategories,
    fetchCmsContent,
    fetchSiteConfigCMS,
    fetchCustomerMessages,
    fetchIpAddress,
    fetchMasterCategories,
    fetchNestedCategory,
    fetchOrders,
    fetchOrderHistory,
    fetchSiteConfigShop,
    fetchShop,
    fetchCoupons,
    fetchOfferProductsFromPromotion,
    fetchWishlist,
  },
  mutations: {
    addProductReview,
    editProductReview,
    createAddress,
    createCustomerMessage,
    placeOrder,
    initiatePayment,
    createShop,
  },
};
