import { addToCart } from '../../mutations/add.js';

export const addToCartController = async (userId,productId,quantity,shopId,Update) => {
  const item = await addToCart(userId,productId,quantity,shopId,);
  console.log(' Added to Cart:', item);
  return item;
};
