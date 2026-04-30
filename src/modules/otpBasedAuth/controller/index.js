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

export const verifyOtp = async (mobile, otp, active_user) => {
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
          active_user,
        }).toString(),
      }
    );

    if (!response.ok) {
      throw new Error(`Verification failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    // Extract data handling potential array response
    const data = Array.isArray(responseData) ? responseData[0] : responseData;
    
    if (String(data.otp_verification) === "1" || data.otp_verification === true) {
        let userData = null;
        if (data.user) {
            try {
                userData = typeof data.user === 'string' ? JSON.parse(data.user) : data.user;
            } catch (e) {
                console.error("Error parsing user data:", e);
                userData = data.user;
            }
        } else if (data.id || data.user_id || data.userId) {
            // Fallback: the response itself might be the user object
            userData = data;
        }
        return { success: true, data: userData };
    } else {
        return { success: false, error: data.message || "Invalid OTP" };
    }

  } catch (error) {
    console.error("OTP verification error:", error);
    return { success: false, error: error.message };
  }
};