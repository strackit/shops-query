import { removeFromCart } from '../../mutations/remove.js';

export const removeFromCartController = async (id) => {
  const resp = await removeFromCart(id);
  console.log('➖ Removed from Cart:', resp);
  return resp;
};
