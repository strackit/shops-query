// src/modules/products/index.js
import { getProductsByFiltersController } from './controller/get_/index.js'; 
// 🔧 If your folder is literally 'get_/', this is correct.
// 🔧 If you named it 'get__/index.js' earlier, change path accordingly:
 // import { getProductsByFiltersController } from './controller/get__/index.js';

export default {
  getProductsByFiltersController,
};