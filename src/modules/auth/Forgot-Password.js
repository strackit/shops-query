export const verifyMobile = async (mobile) => {
  try {
    const response = await fetch(
      "https://you.strackit.com/ALUMNI/loginandsignup/verifymobilenumber.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ 
          mobile: mobile, 
          field: "trouble" 
        }),
      }
    );
    
    const data = await response.text();
    const parsedData = JSON.parse(data);
    
    return {
      success: parsedData["message"] === "Message Sent",
      data: parsedData
    };
  } catch (error) {
    console.error("Verify mobile error:", error);
    return { success: false, error: error.message };
  }
};

export const verifyOtp = async (mobile, otp) => {
  try {
    const response = await fetch(
      "https://you.strackit.com/ALUMNI/loginandsignup/verifyotp.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ mobile, otp }),
      }
    );
    
    const data = await response.text();
    const success = data.trim() === "1";
    
    return { success, data };
  } catch (error) {
    console.error("Verify OTP error:", error);
    return { success: false, error: error.message };
  }
};

export const resetPassword = async (mobile, newPassword) => {
  try {
    const response = await fetch(
      "https://you.strackit.com/ALUMNI/loginandsignup/changepassword.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ mobile, password: newPassword }),
      }
    );
    
    const data = await response.text();
    const success = data.trim() === "1";
    
    return { success, data };
  } catch (error) {
    console.error("Reset password error:", error);
    return { success: false, error: error.message };
  }
};