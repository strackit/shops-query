import categories from './Src/modules/categories/index.js';
import masterCategories from './Src/modules/masterCategories';
import nestedCategory from './Src/modules/nestedCategory';
import offerProducts from './Src/modules/offerProducts';
import productReviews from './Src/modules/productReviews';
import products from './Src/modules/products';
import wishlist from './src/modules/wishlist';
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
