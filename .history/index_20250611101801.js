// index.js
const { gql } = require('@apollo/client/core');
const client = require('./client');

// Product-related Queries
const PRODUCT_REVIEWS_QUERY = require('./queries/productReviews.js');
const PRODUCT_BY_FILTERS_QUERY = require('./queries/productByFilters.js');
const PRODUCTS_BY_CATEGORY_QUERY = require('./queries/productByCategory.js');
const TOP_PRODUCTS_QUERY = require('./queries/topProducts.js');
const OFFER_PRODUCTS_QUERY = require('./queries/offerProducts.js');
const PRODUCT_BY_PRICE_QUERY = require('./queries/productByPrice.js');
const SEARCH_PRODUCTS_QUERY = require('./queries/searchProducts.js');

// Ratings Queries & Mutations from queries/ratings.js
const {
  GET_RATINGS,
  GET_REVIEW_FILTERED,
  ADD_REVIEW_MUTATION,
  EDIT_REVIEW_MUTATION,
} = require('./queries/ratings.js');

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

const fetchRatings = async () => {
  const { data } = await client.query({ query: GET_RATINGS });
  return data.ratings;
};

const fetchFilteredReviews = async (filter) => {
  const { data } = await client.query({ query: GET_REVIEW_FILTERED, variables: { filter } });
  return data.reviews;
};

const  = async (input) => {
  const { data } = await client.mutate({ mutation: ADD_REVIEW_MUTATION, variables: { input } });
  return data.addReview;
};

const editProductReview = async (input) => {
  const { data } = await client.mutate({ mutation: EDIT_REVIEW_MUTATION, variables: { input } });
  return data.editReview;
};

// Export everything
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
    fetchRatings,
    fetchFilteredReviews,
  },
  mutations: {
    addProductReview,
    editProductReview,
  },
};
