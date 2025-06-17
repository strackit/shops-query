import { fetchCart } from '../../queries/get.js';

export const getCartController = async () => {
  const items = await fetchCart();
  console.log('🛒 Cart:', items);
  return items;
};
