import fetch from "cross-fetch";
import FormData from "form-data";
import Cookies from "js-cookie";

const BASE_URL = "https://you.strackit.com/ALUMNI/loginandsignup/";

export async function loginUserWithOTP(mobile) {
  try {
    const formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("field", "login");

    const response = await fetch(`${BASE_URL}verifymobilenumber.php`, {
      method: "POST",
      headers: {
        Accept: "application/json", 
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Login failed with status: ${response.status}`);
    }

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      // API sometimes returns plain text
      data = { mobile };
    }

    if (data && Object.keys(data).length > 0) {
      return {
        success: true,
        data,
      };
    }

    return {
      success: false,
      error: "Invalid credentials",
    };
  } catch (error) {
    console.error("Login API error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

export const getUserData = () => {
  try {
    const cookieValue = Cookies.get("ualum");
    if (!cookieValue) return null;

    const userData = JSON.parse(cookieValue);
    return {
      id: userData.u_id || userData.user_id || null,
      username: userData.user_name || null,
      email: userData.email || null,
      mobile: userData.mobile || null,
    };
  } catch (error) {
    console.error("Error reading user data:", error);
    return null;
  }
};

const fetchUserProfile = async (mobile) => {
  try {
    const formData = new FormData();
    formData.append("mobile", mobile);
    const response = await fetch(
      `${BASE_URL}loginwithmobile.php`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const getUserId = () => {
  try {
    const cookieValue = Cookies.get("ualum");
    if (!cookieValue) return null;

    const userData = JSON.parse(cookieValue);
    return userData.u_id || null;
  } catch (error) {
    console.error("Error getting user ID:", error);
    return null;
  }
};

export const verifyOtp = async (mobile, otp) => {
  try {
    const formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("otp", otp);
    const response = await fetch(
      `${BASE_URL}verifyotp.php`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      }
    );

    const data = await response.text();

    if (data.trim() === "1") {
      const profileData = await fetchUserProfile(mobile);

      // Save user data to cookies
      Cookies.set("ualum", JSON.stringify(profileData));

      // const userId = getUserId?.() || null;
      const userId = getUserData();

      return { success: true, userId, data: profileData };
    }

    // Try parsing JSON (fallback for other formats)
    let userData;
    try {
      userData = JSON.parse(data);
    } catch {
      userData = null;
    }

    if (userData && Object.keys(userData).length > 0) {
      Cookies.set("ualum", JSON.stringify(userData));
      const userId = getUserId?.() || null;
      return { success: true, userId, data: userData };
    }

    return { success: false, userId: null, error: "Invalid OTP" };
  } catch (error) {
    console.error("OTP verification error:", error);
    return { success: false, userId: null, error: error.message };
  }
};