// src/modules/cart/index.js

import { fetchCart } from './controller/get__';
import { addToCart } from './controller/add.js';
import { removeFromCart } from './controller/remove.js';

const CartControllers = {
  fetchCart,
  addToCart,
  removeFromCart,
};

export default CartControllers;
