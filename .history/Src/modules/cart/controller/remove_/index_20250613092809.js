// src/modules/cart/controller/remove_/index.js
import { removeFromCart } from '../../mutations/remove.js';
import {}
export const removeFromCart = async (
  userId,
  productId,
  quantity,
  shopId,
  Delete
) => {
  try {
    const response = await removeFromCart({
      userId: Number(userId),
      productId: Number(productId),
      shopId: Number(shopId),
      delete: Delete, // usually `true`
    });

    console.log('Removed from Cart:', response);
    return response;
  } catch (error) {
    console.error('Error removing from cart:', error.message);
    throw error;
  }
};
