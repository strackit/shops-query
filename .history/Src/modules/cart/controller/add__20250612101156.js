import { addToCart } from '../mutations/add.js';

export const addToCartController = async (productId, quantity) => {
  const item = await addToCart(productId, quantity);
  console.log('➕ Added to Cart:', item);
  return item;
};
