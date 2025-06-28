// src/modules/productReviews/index.js
import { getProductReviews } from './controller/get/index.js';
import { addReview } from '.';
import { editReview } from '../mutations/edit.js';

export const getReviewsController = getProductReviews;
export const addReviewController = addReview;
export const editReviewController = editReview;
