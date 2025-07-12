import dotenv from 'dotenv';
dotenv.config();

import client from './src/utils/client.js';

// --- Module Imports ---
import { getCategoriesController }  from './src/modules/categories/index.js';
import { getMasterCategoriesController } from './src/modules/masterCategories/index.js';
import { getNestedCategoryController } from './src/modules/nestedCategory/index.js';
import { getOfferProductsController } from './src/modules/offerProducts/index.js';
the imports are correct in addReviewController 
import { getReviewsController, addReviewController, editReviewController } from './src/modules/productReviews/index.js';
import { getProductsController } from './src/modules/products/index.js';
import { getWishlistController, addToWishlistController, removeFromWishlistController } from './src/modules/wishlist/index.js';
import { addToCart, removeFromCart, fetchCart } from './src/modules/cart/index.js';
import { getTopProductsController } from './src/modules/topProducts/index.js';
import { getProductsByCategoryController } from './src/modules/productByCategory/index.js';
import { getProductsByFiltersController } from './src/modules/productByFilters/index.js';
import { getProductsByPriceController } from './src/modules/productByPrice/index.js';
import { searchProductsController } from './src/modules/searchproducts/index.js';
import { subscribeToOrderUpdatesController } from './src/modules/orderUpdates/index.js';

// --- Module Namespaces ---
const categories = { getCategoriesController };
const masterCategories = { getMasterCategoriesController };
const nestedCategory = { getNestedCategoryController };
const offerProducts = { getOfferProductsController };
const productReviews = { getReviewsController, addReviewController, editReviewController };
const products = { getProductsController };
const wishlist = { getWishlistController, addToWishlistController, removeFromWishlistController };
const cart = { addToCart, removeFromCart, fetchCart };
const topProducts = { getTopProductsController };
const productByCategory = { getProductsByCategoryController };
const productByFilters = { getProductsByFiltersController };
const productByPrice = { getProductsByPriceController };
const searchproducts = { searchProductsController };
const orderUpdates = { subscribeToOrderUpdatesController };

// --- Final Export ---
const graphqlModules = {
  client,
  categories,
  masterCategories,
  nestedCategory,
  offerProducts,
  productReviews,
  products,
  wishlist,
  cart,
  topProducts,
  productByCategory,
  productByFilters,
  productByPrice,
  searchproducts,
  orderUpdates,
};

export default graphqlModules;

export {
  client,

  // Categories
  getCategoriesController,
  getMasterCategoriesController,
  getNestedCategoryController,

  // Offers & Products
  getOfferProductsController,
  getProductsController,
  getTopProductsController,

  // Product Reviews
  getReviewsController,
  addReviewController,
  editReviewController,

  // Product Filters
  getProductsByCategoryController,
  getProductsByFiltersController,
  getProductsByPriceController,
  searchProductsController,

  // Wishlist
  getWishlistController,
  addToWishlistController,
  removeFromWishlistController,

  // Cart
  addToCart,
  removeFromCart,
  fetchCart,

  // Orders
  subscribeToOrderUpdatesController
};