// src/modules/cart/index.js

import { getCartController } from './controller/get.js';
import { addToCartController } from './controller/add.js';
import { removeFromCartController } from './controller/remove.js';

const CartControllers = {
  getCartController,
  addToCartController,
  removeFromCartController,
};

export default CartControllers;
