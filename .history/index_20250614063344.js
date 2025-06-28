import * as categories from './src/modules/categories/index.js';
import * as masterCategories from './src/modules/masterCategories/index.js';
import * as nestedCategory from './src/modules/nestedCategory/index.js';
import * as offerProducts from './src/modules/offerProducts/index.js';
import * as productReviews from './src/modules/productReviews/index.js';
import * as products from './src/modules/products/index.js';
import  * as wishlist from './src/modules/wishlist/index.js';
import * as cart from './src/modul es/cart/index.js';
import  * as topProducts from './src/modules/topProducts/index.js';
import * as  productsByCategory from './src/modules/productByCategory/index.js';
import * as productByFilters from './src/modules/productByFilters/index.js';
import productByPrice from './src/modules/productByPrice/index.js';
import searchProducts from './src/modules/searchProducts/index.js';

import { listenToOrderUpdatesController } from './src/modules/orderUpdates/index.js';

const graphqlModules = {
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
