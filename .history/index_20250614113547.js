import client  from './src/utils/client.js';

import  * as categories from './src/modules/categories/index.js';
import  * as masterCategories from './src/modules/masterCategories/index.js';
import  * as nestedCategory from './src/modules/nestedCategory/index.js';
import  * as offerProducts from './src/modules/offerProducts/index.js';
import   * asproductReviews from './src/modules/productReviews/index.js';
import products from './src/modules/products/index.js';
import wishlist from './src/modules/wishlist/index.js';
import cart from './src/modules/cart/index.js';
import topProducts from './src/modules/topProducts/index.js';
import productsByCategory from './src/modules/productByCategory/index.js';
import productByFilters from './src/modules/productByFilters/index.js';
import productByPrice from './src/modules/productByPrice/index.js';
import searchproducts from './src/modules/searchproducts/index.js';

import { listenToOrderUpdatesController } from './src/modules/orderUpdates/index.js';

export default  {
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
  ...searchproducts,
  listenToOrderUpdatesController,
};


