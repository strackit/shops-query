import cart import categories from './src/modules/categories/index.js';
import masterCategories from './src/modules/masterCategories/index.js';
import nestedCategory from './src/modules/nestedCategory/index.js';
import offerProducts from './src/modules/offerProducts/index.js';
import productReviews from './src/modules/productReviews/index.js';
import products from './src/modules/products/index.js';
import wishlist from './src/modules/wishlist/index.js';
import cart from './src/modules/cart/index.js';
import topProducts from './src/modules/topProducts/index.js';
import productsByCategory from './src/modules/productByCategory/index.js';
import productByFilters from './src/modules/productByFilters/index.js';
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
