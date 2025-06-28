
import { UPDATE_OR_DELETE_CART } from '../../mutations/remove.js';

//  Remove from cart controller
 export const removeFromCart = async (userId, productId, quantity, shopId, Delete) => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_OR_DELETE_CART, //  Correct mutation reference
      variables: {
        userId: Number(userId),
        productId: Number(productId),
        shopId: Number(shopId),
        update: !Delete,                  //  If Delete is true, update = false
        quantity: Number(quantity),
      },
    });

    console.log(' Removed from Cart:', data.Cart);
    return data.Cart;
  } catch (error) {
    console.error(' Error removing from cart:', error.message);
    throw error;
  }
};

export default{removeFromCart };