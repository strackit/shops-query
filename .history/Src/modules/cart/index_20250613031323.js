// src/modules/cart/index.js

import { fetchCart } from './controller/get.js';
import { add } from './controller/add.js';
import { removeFromCartController } from './controller/remove.js';

const CartControllers = {
  getCartController,
  addToCartController,
  removeFromCartController,
};

export default CartControllers;
