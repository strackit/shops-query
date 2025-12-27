import fetch from 'cross-fetch';

const BASE_URL = "https://you.strackit.com/ALUMNI/loginandsignup/";

export async function verifyMobile(mobile) {
    try {
        const response = await fetch(`${BASE_URL}verifymobilenumber.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                mobile,
                field: "trouble"
            }).toString(),
        });

        if (!response.ok) {
            throw new Error(`Verify mobile failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Verify Mobile API error:", error);
        throw error;
    }
}

export async function verifyOtp(mobile, otp) {
    try {
        const response = await fetch(`${BASE_URL}verifyotp.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                mobile,
                otp
            }).toString(),
        });

        if (!response.ok) {
            throw new Error(`Verify OTP failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Verify OTP API error:", error);
        throw error;
    }
}

export async function resetPassword(mobile, password) {
    try {
        const response = await fetch(`${BASE_URL}changepassword.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                mobile,
                password
            }).toString(),
        });

        if (!response.ok) {
            throw new Error(`Reset password failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Reset Password API error:", error);
        throw error;
    }
}
