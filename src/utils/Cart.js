import Cookies from 'js-cookie';
import { addToCart, fetchCart } from '../modules/cart/index.js';

export const getGuestCart = () => {
  try {
    const guestCart = Cookies.get('guest_cart');
    return guestCart ? JSON.parse(guestCart) : [];
  } catch (error) {
    console.error('Error getting guest cart:', error);
    return [];
  }
};

export const addToGuestCart = (product) => {
  try {
    const guestCart = getGuestCart();
    const existingItemIndex = guestCart.findIndex(
      item => item.productId === product.productId
    );
    
    if (existingItemIndex >= 0) {
      guestCart[existingItemIndex].quantity += product.quantity;
    } else {
      guestCart.push({
        productId: product.productId,
        quantity: product.quantity,
        name: product.name,
        prize: product.price,
        Discount: product.discount,
        tax: product.tax,
        featureImage: product.featureImage
      });
    }
    
    Cookies.set('guest_cart', JSON.stringify(guestCart), { expires: 7 });
    
    // Update cart count
    const count = guestCart.reduce((total, item) => total + item.quantity, 0);
    window.dispatchEvent(new CustomEvent("cartCountUpdated", { detail: count }));
    
    return true;
  } catch (error) {
    console.error("Error adding to guest cart:", error);
    return false;
  }
};

export const removeFromGuestCart = (productId) => {
  try {
    const guestCart = getGuestCart();
    const updatedCart = guestCart.filter(item => item.productId !== productId);
    Cookies.set('guest_cart', JSON.stringify(updatedCart), { expires: 7 });
    
    // Update cart count
    const count = updatedCart.reduce((total, item) => total + item.quantity, 0);
    window.dispatchEvent(new CustomEvent("cartCountUpdated", { detail: count }));
    
    return true;
  } catch (error) {
    console.error('Error removing from guest cart:', error);
    return false;
  }
};

export const updateGuestCartQuantity = (productId, quantity) => {
  try {
    const guestCart = getGuestCart();
    const updatedCart = guestCart.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    );
    Cookies.set('guest_cart', JSON.stringify(updatedCart), { expires: 7 });
    
    // Update cart count
    const count = updatedCart.reduce((total, item) => total + item.quantity, 0);
    window.dispatchEvent(new CustomEvent("cartCountUpdated", { detail: count }));
    
    return true;
  } catch (error) {
    console.error('Error updating guest cart:', error);
    return false;
  }
};

export const clearGuestCart = () => {
  Cookies.remove('guest_cart');
  window.dispatchEvent(new CustomEvent("cartCountUpdated", { detail: 0 }));
};