// src/modules/productReviews/index.js
import { getProductReviews } from './controller/get/index.js';
import { addReview } from './controller/add/index.js';
import { editReview } from './controller/edit/index.js';

export const Product_reviews = {getProductReviewsController};
export const addReviewController = { addReview;
export const editReviewController = editReview;
