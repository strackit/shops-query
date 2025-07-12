// src/modules/cart/index.js

export default { addToCart } from './controller/add/index.js';
export default { fetchCart } from './controller/get/index.js'; // ✅ CORRECTED path from get__ to fetch_
export default { removeFromCart } from './controller/remove/index.js';
