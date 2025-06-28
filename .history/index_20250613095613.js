import categories from './Src/modules/categories/index.js';
import masterCategories from './Src/modules/masterCategories/index.js';
import nestedCategory from './Src/modules/nestedCategory/index.js';
import offerProducts from './Src/modules/offerProducts/index.js';
import productReviews from './Src/modules/productReviews/index.js';
import products from './Src/modules/products/index.js';
import wishlist from './Src/modules/wishlist/index.js';
import cart from './Src/modules/cart/index.js';
import topProducts from './Src/modules/topProducts/index.js';
import productsByCategory from './Src/modules/productsByCategory/index.js';
import productByFilters from './Src/modules/productByFilters/index.js';
import productByPrice from './Src/modules/productByPrice/index.js';
import searchProducts from './Src/modules/searchproducts/index.js';

import { listenToOrderUpdatesController } from './Src/modules/orderUpdates/controller/listen';

// Combine everything into one object
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

// Export the final combined modules
export default graphqlModules;

// Optional: Run test/demo mode when directly executed
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 Loaded GraphQL Modules:', Object.keys(graphqlModules));
}
