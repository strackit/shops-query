// src/modules/cart/controller/add_/index.js
import client from '../../../../utils/client.js';
import { UPDATE_CART } from '../../mutations/add.js'; // ✅

export const addToCart = async ({ productId, shopId, userId, quantity }) => {
  const response = await client.mutate({
    mutation: UPDATE_CART,
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
