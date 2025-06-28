// src/modules/cart/index.js

import { fetchCart } from './controller/get__/index.js';
import { addToCart } from './controller/add_';
import { removeFromCart } from './controller/remove.js';

const CartControllers = {
  fetchCart,
  addToCart,
  removeFromCart,
};

export default CartControllers;
