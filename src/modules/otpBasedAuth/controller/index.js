import fetch from "cross-fetch";

const BASE_URL = "https://you.strackit.com/ALUMNI/loginandsignup/";

export async function loginUserWithOTP(mobile) {
  try {
    const response = await fetch(`${BASE_URL}loginorregistration.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        mobile,
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

export const verifyOtp = async (mobile, otp, activeUserStatus = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}verifyunregistermobile.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          mobile,
          otp,
          active_user: activeUserStatus,
        }).toString(),
      }
    );

    let data = await response.text();
    data = JSON.parse(data);

    if (data.otp_verification == 0) {
      return { success: false, error: "Invalid OTP" };
    } else {
    let userData;
    try {
      userData = JSON.parse(data.user);
    } catch {
      userData = null;
    }

    if (userData && Object.keys(userData).length > 0) {
      const profileData = await fetchUserProfile(mobile);
      if (profileData && (profileData.auth || profileData.auth_token)) {
        return { success: true, data: profileData };
      }
      return { success: true, data: userData };
    }

    return { success: false, error: "Invalid OTP" };
    }
  } catch (error) {
    console.error("OTP verification error:", error);
    return { success: false, error: error.message };
  }
};