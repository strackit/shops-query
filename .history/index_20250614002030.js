import categories from './src/modules/categories/index.js';
import masterCategories from './src/modules/masterCategories/index.js';
import nestedCategory from './src/modules/nestedCategory/index.js';
import offerProducts from './src/modules/offerProducts/index.js';
import productReviews from './src/modules/productReviews/index.js';
import products from './src/modules/products/index.js';
import wishlist from './src/modules/wishlist/index.js';
import cart from './src/modules/cart';
import topProducts from './src/modules/topProducts';
import productsByCategory from './src/modules/productByCategory';
import productByFilters from './src/modules/productByFilters';
import productByPrice from './src/modules/productByPrice';
import searchProducts from './src/modules/searchProducts';

import { listenToOrderUpdatesController } from './src/modules/orderUpdates';

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
