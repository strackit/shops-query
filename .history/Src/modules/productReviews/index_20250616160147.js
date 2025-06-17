// src/modules/productReviews/index.js
import { getProductReviews } from '../queries/get.js';
import { addReview } from '../mutations/add.js';
import { editReview } from '../mutations/edit.js';

export const getReviewsController = getProductReviews;
export const addReviewController = addReview;
export const editReviewController = editReview;
