// src/modules/cart/controller/add_/index.js
import client from '../../../../utils/client.js';
import { ADD_TO_CART } from '../../mutations/add.js';

// Adds a product to the cart or updates quantity
export const addToCart = async ({ productId, shopId, userId, quantity }) => {
  const response = await client.request({
    que: ADD_TO_CART,
    variables: {
      productId: Number(productId),
      shopId: Number(shopId),
      userId: Number(userId),
      update: true,
      quantity: Number(quantity),
    },
  });

  return response.data.Cart;
};

