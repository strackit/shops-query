// src/modules/cart/index.js

export { addToCart } from './controller/add/index.js';
export { fetchCart } from './controller/get/index.js'; // ✅ CORRECTED path from get__ to fetch_
export { removeFromCart } from './controller/remove/index.js';
