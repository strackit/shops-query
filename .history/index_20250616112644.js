import dotenv from 'dotenv';
dotenv.config(); // Load environment variables at the top

import client from './src/utils/client.js';

import { getCategoriesController } from categories '../../../src/modules/categories/controller/get/index.js';
import * as masterCategories from './src/modules/masterCategories/index.js';
import * as nestedCategory from './src/modules/nestedCategory/index.js';
import * as offerProducts from './src/modules/offerProducts/index.js';
import * as productReviews from './src/modules/productReviews/index.js';
import * as products from './src/modules/products/index.js';
import * as wishlist from './src/modules/wishlist/index.js';
import * as cart from './src/modules/cart/index.js';
import * as topProducts from './src/modules/topProducts/index.js';
import * as productsByCategory from './src/modules/productByCategory/index.js';
import * as productByFilters from './src/modules/productByFilters/index.js';
import * as productByPrice from './src/modules/productByPrice/index.js';
import * as searchProducts from './src/modules/searchproducts/index.js';

import { listenToOrderUpdatesController } from './src/modules/orderUpdates/index.js';

const graphqlModules = {
  client,
  ...categories,
  ...masterCategories,
  ...nestedCategory,
  ...offerProducts,
  ...productReviews,
  ...products,
  ...wishlist,
  ...cart,
  ...topProducts,
  ...productsByCategory,
  ...productByFilters,
  ...productByPrice,
  ...searchProducts,
  listenToOrderUpdatesController,
};

export default graphqlModules;
