// src/modules/productReviews/index.js
import { getProductReviewsController } from './controller/get/index.js';
import { addReview } from './controller/add/index.js';
import { editReview } from './controller/edit/index.js';

export const Product_reviews = {getProductReviewsController};
export const Product_reviews1 = { addReviewController };
export const Product_reviews2 = {editReviewController};
