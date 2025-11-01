import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { migrateGuestCartToUserCart } from './user.js';

export const registerUser = async (userData, shopId) => {
  try {
    const response = await fetch(
      "https://you.strackit.com/ALUMNI/loginandsignup/signup.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(userData),
      }
    );
    
    const data = await response.text();
    
    // Auto-login after successful registration
    if (data && data !== "error" && !data.includes("Error")) {
      try {
        const jsonData = JSON.parse(data);
        if (jsonData.auth) {
          Cookies.set("ualum", data);
          const userId = getUserId();
          
          // Migrate guest cart to user cart after registration
          if (userId && shopId) {
            await migrateGuestCartToUserCart(userId, shopId);
          }
          
          return { success: true, userId, data: jsonData };
        }
      } catch (e) {
        // If not JSON, treat as success and set cookie
        Cookies.set("ualum", data);
        const userId = getUserId();
        
        if (userId && shopId) {
          await migrateGuestCartToUserCart(userId, shopId);
        }
        
        return { success: true, userId, data };
      }
    }
    
    return { success: false, error: data || "Registration failed" };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, error: error.message };
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