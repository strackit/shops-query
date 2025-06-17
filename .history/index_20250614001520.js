import categories from './Src/modules/categories/index.js';
import masterCategories from './Src/modules/masterCategories';
import nestedCategory from './Src/modules/nestedCategory';
import offerProducts from './Src/modules/offerProducts';
import productReviews from './Src/modules/productReviews';
import products from './Src/modules/products';
import wishlist from './Src/modules/wishlist';
import cart from './Src/modules/cart';
import topProducts from './Src/modules/topProducts';
import productsByCategory from './Src/modules/productByCategory';
import productByFilters from './Src/modules/productByFilters';
import productByPrice from './Src/modules/productByPrice';
import searchProducts from './Src/modules/searchProducts';

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
