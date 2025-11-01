import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { migrateGuestCartToUserCart } from './user.js';

export const loginUser = async (email, password, shopId) => {
  try {
    const response = await fetch(
      "https://you.strackit.com/ALUMNI/loginandsignup/loginwithpassword.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email, password }),
      }
    );
    
    const data = await response.text();
    
    if (data !== "Invalid Credentials" && data.trim() !== "") {
      try {
        const jsonData = JSON.parse(data);
        if (jsonData.auth) {
          Cookies.set("ualum", data);
          const userId = getUserId();
          
          // Migrate guest cart to user cart after login
          if (userId && shopId) {
            await migrateGuestCartToUserCart(userId, shopId);
          }
          
          return { success: true, userId, data: jsonData };
        }
      } catch (e) {
        Cookies.set("ualum", data);
        const userId = getUserId();
        
        // Migrate guest cart to user cart after login
        if (userId && shopId) {
          await migrateGuestCartToUserCart(userId, shopId);
        }
        
        return { success: true, userId, data };
      }
    }
    return { success: false, userId: null, error: "Invalid credentials" };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, userId: null, error: error.message };
  }
};

const getUserId = () => {
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