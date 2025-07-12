// src/modules/cart/index.js

import { addToCart } from './controller/add/index.js';
import { fetchCart } from './controller/get/index.js'; // ✅ CORRECTED path from get__ to fetch_
import  { removeFromCart } from './controller/remove/index.js';

export 