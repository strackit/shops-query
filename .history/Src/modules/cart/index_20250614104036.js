// src/modules/cart/index.js

import  fetchCart  from './controller/get__/index.js';
import   addToCart  from './controller/add_/index.js';
import   removeFromCart  from './controller/remove_/index.js';

const CartControllers = {
  fetchCart,
  addToCart,
  removeFromCart,
};

export default CartControllers;
