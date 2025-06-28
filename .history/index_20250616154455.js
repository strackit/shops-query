// graphql-project/index.js

import dotenv from 'dotenv';
dotenv.config();

import client from './src/utils/client.js';

// Import all modules as namespaced objects:
import { getCategoriesController }  from './src/modules/categories/index.js';
import { getMasterCategoriesController } from './src/modules/masterCategories/index.js';
import { getNestedCategoryController } from './src/modules/nestedCategory/index.js';
import * as offerProducts from './src/modules/offerProducts/index.js';
import * as productReviews from './src/modules/productReviews/index.js';
import * as products from './src/modules/products/index.js';
import * as wishlist from './src/modules/wishlist/index.js';
import * as cart from './src/modules/cart/index.js';
import * as topProducts from './src/modules/topProducts/index.js';
import * as productByCategory from './src/modules/productByCategory/index.js';
import * as productByFilters from './src/modules/productByFilters/index.js';
import * as productByPrice from './src/modules/productByPrice/index.js';
import * as searchproducts from './src/modules/searchproducts/index.js';

import * as orderUpdates from './src/modules/orderUpdates/index.js';

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
