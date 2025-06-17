// src/modules/cart/index.js

import {GET_ fetchCart } from './controller/get__/index.js';
import {UPDATE_CART, addToCart } from './controller/add_/index.js';
import { removeFromCart } from './controller/remove_/index.js';

const CartControllers = {
  fetchCart,
  addToCart,
  removeFromCart,
};

export default CartControllers;
