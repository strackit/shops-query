// src/modules/productReviews/index.js

import { getReviewsController } from './controller/get/index.js';
import { addReviewController } from './controller/add/index.js';
import { editReviewController } from './controller/edit/index.js';

// ✅ Named exports (can be destructured directly)
export PS D:\graphql-project\shops-query> node products/test.js
file:///D:/graphql-project/shops-query/products/index.js:11
import { getReviewsController, addReviewController, editReviewController } from './src/modules/productReviews/index.js';
                               ^^^^^^^^^^^^^^^^^^^
SyntaxError: The requested module './src/modules/productReviews/index.js' does not provide an export named 'addReviewController'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:182:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:266:5)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:644:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)

Node.js v22.16.0
PS D:\graphql-project\shops-query>  {
  getReviewsController,
  addReviewController,
  editReviewController,
};
