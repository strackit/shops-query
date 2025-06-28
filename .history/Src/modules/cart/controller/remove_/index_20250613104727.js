import { removeFromCart as removeFromCartMutation } from '../../mutations/remove.js';
impo

export const removeFromCart = async (id) => {
  try {
    const result = await removeFromCartMutation(id);
    console.log('🛒 Removed from cart:', result);
    return result;
  } catch (error) {
    console.error('❌ Failed to remove from cart:', error);
  }
};
