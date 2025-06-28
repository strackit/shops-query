// src/modules/cart/controller/add_/index.js
import client from '../../../../utils/client.js';
import { ADD_TO_CART } from '../../mutations/add.js';

export const addToCart = async ({ productId, shopId, userId, quantity }) => {
  const response = await client.mutate({
    mutation: ADD_TO_CART,
    variables: {
      productId: Number(productId),
      shopId: Number(shopId),
      userId: Number(userId),
      update: true,
      quantity: Number(quantity),
    },
  });

  return response.data.Cart; // Make sure it matches the return structure of your mutation
};
