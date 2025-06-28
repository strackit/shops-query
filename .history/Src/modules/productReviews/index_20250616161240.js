// src/modules/productReviews/index.js
import { getReviewsController } from './controller/get/index.js';
import { addReviewController } from './controller/add/index.js';
import { editReviewController } from './controller/edit/index.js';

export const Product_reviews = {getReviewsController};
export const Product_reviews2 = {editReviewController};
