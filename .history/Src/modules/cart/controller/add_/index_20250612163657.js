import { addToCart } from '../../mutations/add.js';

export const addToCartController = async (userId,productId,quantity,shopId,Delete) => {
  const item = await addToCart(productId, quantity);
  console.log(' Added to Cart:', item);
  return item;
};
