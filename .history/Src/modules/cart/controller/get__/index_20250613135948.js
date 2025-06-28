// src/modules/cart/controller/get_/index.js
import client from '../../../../utils/client.js';
import { GET_CART } from '../../queries/get.js';

export const fetchCart = async (filters) => {
  const response = await client.query({
    query: GET_CART,
    variables: { filters },
    fetchPolicy: 'no-cache',
  });
  return response.data.cart;
};


export {  GET_CART };