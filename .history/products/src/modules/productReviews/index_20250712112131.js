// src/modules/productReviews/index.js

import { getReviewsController } from './controller/get/index.js';
import { addReviewController } from './controller/add/index.js';
import { editReviewController } from './controller/edit/index.js';

// ✅ Named exports (can be destructured directly)
export default {
  {getReviewsController,
  addReviewController,
  editReviewController,
};
