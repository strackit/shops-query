// src/modules/cart/controller/add_/index.js
import client from '../../../../utils/client.js';
import { ADD_TO_CART } from '../../mutations/add.js';

export const addToCart = async (input) => {
  const response = await client.mutate({
    mutation: ADD_TO_CART,
    variables: { input },
  });
  return response.data.cart;
};
