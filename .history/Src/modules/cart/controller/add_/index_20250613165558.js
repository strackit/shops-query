// src/modules/cart/controller/add_/index.js
mport { UPDATE_CART } from '../../mutations/add.js';

// Adds a product to the cart or updates quantity
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

  return response.data.Cart;
};

export { UPDATE_CART };
