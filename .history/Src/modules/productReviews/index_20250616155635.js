// src/modules/reviews/index.js

import { getReviewsController } from './controller/get/index.js';
import { addReviewController } from './controller/add/index.js';
import { editReviewController } from './controller/edit/index.js';

export const productReviews = {
  getReviewsController,
  addReviewController,
  editReviewController,
};
