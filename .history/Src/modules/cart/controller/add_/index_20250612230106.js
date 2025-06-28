import { addToCart } from '../../mutations/add.js';

export const addToCart = async (userId,productId,quantity,shopId,Update) => {
  const item = await addToCart(userId,productId,quantity,shopId,Update);
  console.log(' Added to Cart:', item);
  return item;
};
