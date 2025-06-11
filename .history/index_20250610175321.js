// services/productService.js
import client from '../client.js';
import {
  PRODUCT_REVIEWS_QUERY,
  PRODUCT_BY_FILTERS_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
  TOP_PRODUCTS_QUERY,
  OFFER_PRODUCTS_QUERY,
  PRODUCT_BY_PRICE_QUERY,
  SEARCH_PRODUCTS_QUERY,
} from '../queries/productQueries.js';
import {
  ADD_REVIEW_MUTATION,
  EDIT_REVIEW_MUTATION,
} from '../mutations/productMutations.js';

export const fetchProductReviews = async (productId) => {
  const { data } = await client.query({ query: PRODUCT_REVIEWS_QUERY, variables: { productId } });
  return data.productReviews;
};

export const fetchProductByFilters = async (filters) => {
  const { data } = await client.query({ query: PRODUCT_BY_FILTERS_QUERY, variables: { filters } });
  return data.productByFilters;
};

export const fetchProductsByCategory = async (categoryId) => {
  const { data } = await client.query({ query: PRODUCTS_BY_CATEGORY_QUERY, variables: { categoryId } });
  return data.productsByCategory;
};

export const fetchTopProducts = async () => {
  const { data } = await client.query({ query: TOP_PRODUCTS_QUERY });
  return data.topProducts;
};

export const fetchOfferProducts = async () => {
  const { data } = await client.query({ query: OFFER_PRODUCTS_QUERY });
  return data.offerProducts;
};

export const fetchProductByPrice = async (priceRange) => {
  const { data } = await client.query({ query: PRODUCT_BY_PRICE_QUERY, variables: { priceRange } });
  return data.productByPrice;
};

export const fetchSearchProducts = async (keyword) => {
  const { data } = await client.query({ query: SEARCH_PRODUCTS_QUERY, variables: { keyword } });
  return data.searchProducts;
};

export const addProductReview = async (input) => {
  const { data } = await client.mutate({ mutation: ADD_REVIEW_MUTATION, variables: { input } });
  return data.addReview;
};

export const editProductReview = async (input) => {
  const { data } = await client.mutate({ mutation: EDIT_REVIEW_MUTATION, variables: { input } });
  return data.editReview;
};

// services/cartService.js
import client from '../client.js';
import { CART_QUERY } from '../queries/cart.js';
import { CART_MUTATION } from '../mutations/cart.js';

export const fetchCart = async (customerId) => {
  const { data } = await client.query({ query: CART_QUERY, variables: { customerId } });
  return data.cart;
};

export const updateCart = async ({ productId, customerId, quantity }) => {
  const { data } = await client.mutate({ mutation: CART_MUTATION, variables: { productId, customerId, quantity } });
  return data.Cart;
};

// services/wishlistService.js
import client from '../client.js';
import { WISHLIST_QUERY } from '../queries/wishlist.js';
import { WISHLIST_MUTATION } from '../mutations/wishlist.js';

export const fetchWishlist = async (customerId) => {
  const { data } = await client.query({ query: WISHLIST_QUERY, variables: { customerId } });
  return data.wishlist;
};

export const updateWishlist = async ({ productId, customerId }) => {
  const { data } = await client.mutate({ mutation: WISHLIST_MUTATION, variables: { productId, customerId } });
  return data.Wishlist;
};

// services/categoryService.js
import client from '../client.js';
import {
  CATEGORIES_QUERY,
  MASTER_CATEGORIES_QUERY,
  NESTED_CATEGORY_QUERY,
  SECONDARY_CATEGORIES_QUERY,
} from '../queries/categoryQueries.js';

export const fetchCategories = async () => {
  const { data } = await client.query({ query: CATEGORIES_QUERY });
  return data.categories;
};

export const fetchMasterCategories = async () => {
  const { data } = await client.query({ query: MASTER_CATEGORIES_QUERY });
  return data.masterCategories;
};

export const fetchNestedCategory = async (parentId) => {
  const { data } = await client.query({ query: NESTED_CATEGORY_QUERY, variables: { parentId } });
  return data.nestedCategory;
};

export const fetchSecondaryCategories = async (nestedId) => {
  const { data } = await client.query({ query: SECONDARY_CATEGORIES_QUERY, variables: { nestedId } });
  return data.secondaryCategories;
};

// services/shopService.js
import client from '../client.js';
import { SHOP_QUERY, IP_ADDRESS_QUERY } from '../queries/shopQueries.js';

export const fetchShop = async () => {
  const { data } = await client.query({ query: SHOP_QUERY });
  return data.shop;
};

export const fetchIpAddress = async () => {
  const { data } = await client.query({ query: IP_ADDRESS_QUERY });
  return data.getIpAddress;
};

// services/orderService.js
import client from '../client.js';
import {
  ORDERS_QUERY,
  ORDER_HISTORY_QUERY,
  USER_ORDER_DETAILS_QUERY,
  ORDER_MASTER_QUERY,
} from '../queries/orderQueries.js';
import {
  ORDER_MUTATION,
  ORDER_BY_CART_MUTATION,
  CANCEL_ORDER_MUTATION,
} from '../mutations/orderMutations.js';

export const fetchOrders = async () => {
  const { data } = await client.query({ query: ORDERS_QUERY });
  return data.orders;
};

export const fetchOrderHistory = async (userId) => {
  const { data } = await client.query({ query: ORDER_HISTORY_QUERY, variables: { userId } });
  return data.orderHistory;
};

export const fetchUserOrderDetails = async (orderId) => {
  const { data } = await client.query({ query: USER_ORDER_DETAILS_QUERY, variables: { orderId } });
  return data.userOrderDetails;
};

export const fetchOrderMaster = async () => {
  const { data } = await client.query({ query: ORDER_MASTER_QUERY });
  return data.orderMaster;
};

export const createOrder = async (orderInput) => {
  const { data } = await client.mutate({ mutation: ORDER_MUTATION, variables: { orderInput } });
  return data.Order;
};

export const createOrderByCart = async (cartInput) => {
  const { data } = await client.mutate({ mutation: ORDER_BY_CART_MUTATION, variables: { cartInput } });
  return data.OrderbyCart;
};

export const cancelOrder = async (orderId) => {
  const { data } = await client.mutate({ mutation: CANCEL_ORDER_MUTATION, variables: { orderId } });
  return data.cancelOrder;
};

// services/addressService.js
import client from '../client.js';
import { ADDRESS_QUERY, CUSTOMER_MESSAGE_QUERY, GET_STATE_QUERY } from '../queries/addressQueries.js';
import { ADDRESS_MUTATION, CUSTOMER_MESSAGE_MUTATION } from '../mutations/addressMutations.js';

export const fetchAddress = async (filter) => {
  const { data } = await client.query({ query: ADDRESS_QUERY, variables: { filter } });
  return data.address;
};

export const sendCustomerMessage = async (messageInput) => {
  const { data } = await client.mutate({ mutation: CUSTOMER_MESSAGE_MUTATION, variables: { messageInput } });
  return data.CustomerMessage;
};

export const fetchStates = async () => {
  const { data } = await client.query({ query: GET_STATE_QUERY });
  return data.getstate;
};

// services/promotionService.js
import client from '../client.js';
import {
  BANNERS_QUERY,
  BLOG_QUERY,
  COUPON_CODE_QUERY,
  SHIPPING_COST_QUERY,
} from '../queries/promotionQueries.js';

export const fetchBanners = async () => {
  const { data } = await client.query({ query: BANNERS_QUERY });
  return data.banners;
};

export const fetchBlogs = async () => {
  const { data } = await client.query({ query: BLOG_QUERY });
  return data.Blog;
};

export const fetchCouponCodes = async () => {
  const { data } = await client.query({ query: COUPON_CODE_QUERY });
  return data.couponCode;
};

export const fetchShippingCost = async () => {
  const { data } = await client.query({ query: SHIPPING_COST_QUERY });
  return data.shippingCost;
};

// services/paymentService.js
import client from '../client.js';
import {
  INITIATE_PAYMENT_MUTATION,
  CHECK_PAYMENT_STATUS_MUTATION,
} from '../mutations/paymentMutations.js';

export const initiatePayment = async (paymentInput) => {
  const { data } = await client.mutate({ mutation: INITIATE_PAYMENT_MUTATION, variables: { paymentInput } });
  return data.initiatePayment;
};

export const checkPaymentStatus = async (paymentId) => {
  const { data } = await client.mutate({ mutation: CHECK_PAYMENT_STATUS_MUTATION, variables: { paymentId } });
  return data.checkPaymentStatus;
};
