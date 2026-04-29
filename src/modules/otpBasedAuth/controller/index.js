import fetch from "cross-fetch";

const BASE_URL = "https://you.strackit.com/ALUMNI/loginandsignup/";

// Send OTP - uses loginorregistration.php (same as BOO)
// Returns: { userfound: 0|1, otpsend: "Message Sent" }
export async function loginUserWithOTP(mobile) {
  try {
    const formData = new FormData();
    formData.append("mobile", mobile);

    const response = await fetch(`${BASE_URL}loginorregistration.php`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Login failed with status: ${response.status}`);
    }

    const data = await response.text();
    return JSON.parse(data);
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
}

// Verify OTP - uses verifyunregistermobile.php (same as BOO)
// Requires active_user status from loginUserWithOTP response
// Returns: { success: true, data: userData } or { success: false, error: "..." }
export const verifyOtp = async (mobile, otp, activeUserStatus = 1) => {
  try {
    const formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("otp", otp);
    formData.append("active_user", activeUserStatus);

    const response = await fetch(
      `${BASE_URL}verifyunregistermobile.php`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      }
    );

    let data = await response.text();
    data = JSON.parse(data);

    if (data.otp_verification == 0) {
      return { success: false, error: "Invalid OTP" };
    }

    // Parse user data from response
    let userData;
    try {
      userData = JSON.parse(data.user);
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