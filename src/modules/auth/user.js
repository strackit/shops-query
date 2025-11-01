import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { getGuestCart, clearGuestCart } from '../../utils/cart.js';
import { addToCart, fetchCart } from '../cart/index.js';

export const getUserId = () => {
  try {
    const cookieValue = Cookies.get("ualum");
    if (cookieValue) {
      const decodedValue = JSON.parse(decodeURIComponent(cookieValue));
      const decodedAuth = jwtDecode(decodedValue.auth);
      return parseInt(decodedAuth.user_id);
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getUserData = () => {
  try {
    const cookieValue = Cookies.get("ualum");
    if (cookieValue) {
      const decodedCookie = decodeURIComponent(cookieValue);
      const userData = JSON.parse(decodedCookie);
      const decodedAuth = jwtDecode(userData.auth);
      
      return {
        id: parseInt(decodedAuth.user_id),
        username: userData.user_name || null,
        email: userData.email || null,
        mobile: userData.mobile || null,
      };
    }
    return null;
  } catch (error) {
    console.error("Error decoding user data:", error);
    return null;
  }
};

export const logoutUser = () => {
  Cookies.remove("ualum");
  window.location.reload();
};

export const migrateGuestCartToUserCart = async (userId, shopId) => {
  const guestCart = getGuestCart();
  
  if (!guestCart || guestCart.length === 0) {
    return;
  }
  
  try {
    const userCart = await fetchCart(shopId, Number(userId));
    
    for (const item of guestCart) {
      const isAlreadyInCart = userCart.some(
        cartItem => cartItem.productId === item.productId
      );
      
      if (!isAlreadyInCart) {
        await addToCart({
          userId: Number(userId),
          shopId: Number(shopId),
          productId: Number(item.productId),
          quantity: Number(item.quantity),
        });
      }
    }
    
    clearGuestCart();
    
  } catch (error) {
    console.error("Error during cart migration:", error);
    throw error;
  }
};