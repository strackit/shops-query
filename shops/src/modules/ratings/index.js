// src/modules/ratings/index.js
import { fetchReviews, updateReview } from './controller/index.js';

export default {
  fetchReviews,
  updateReview,       // ← this line MUST be here
};
