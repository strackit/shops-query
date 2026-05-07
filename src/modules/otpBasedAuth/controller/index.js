import fetch from "cross-fetch";

const BASE_URL = "https://you.strackit.com/ALUMNI/loginandsignup/";

export async function loginUserWithOTP(mobile) {
  try {
    const response = await fetch(`${BASE_URL}verifymobilenumber.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        mobile,
        field: "login",
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Login failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
}

const fetchUserProfile = async (mobile) => {
  try {
    const response = await fetch(
      `${BASE_URL}loginwithmobile.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          mobile,
        }).toString(),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const verifyOtp = async (mobile, otp) => {
  try {
    const response = await fetch(
      `${BASE_URL}verifyotp.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          mobile,
          otp,
        }).toString(),
      }
    );

    const data = await response.text();

    if (data.trim() === "1") {
      const profileData = await fetchUserProfile(mobile);
      return { success: true, data: profileData };
    }

    // Try parsing JSON (fallback for other formats)
    let userData;
    try {
      userData = JSON.parse(data);
    } catch {
      userData = null;
    }

    if (userData && Object.keys(userData).length > 0) {
      return { success: true, data: userData };
    }

    return { success: false, error: "Invalid OTP" };
  } catch (error) {
    console.error("OTP verification error:", error);
    return { success: false, error: error.message };
  }
};