import fetch from 'cross-fetch';

const BASE_URL = "https://you.strackit.com/ALUMNI/loginandsignup/";

export async function loginUser(emailOrMobile, password) {
    try {
        const response = await fetch(`${BASE_URL}login.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                emailOrMobile,
                password,
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
