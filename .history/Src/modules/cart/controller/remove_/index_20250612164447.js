import { removeFromCart } from '../../mutations/remove.js';

export const removeFromCartController = async (id) => {
  const resp = await removeFromCart(userId,
     productId,
     quantity,
     shopId
     Delete);
  console.log(' Removed from Cart:', resp);
  return resp;
};
