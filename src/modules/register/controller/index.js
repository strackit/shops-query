import fetch from 'cross-fetch';

const BASE_URL = "https://you.strackit.com/ALUMNI/loginandsignup/";

export async function registerUser({ email, mobile, userName, password }) {
    try {
        const response = await fetch(`${BASE_URL}signup.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                email,
                mobile,
                userName,
                password,
            }).toString(),
        });

        if (!response.ok) {
            throw new Error(`Registration failed with status: ${response.status}`);
        }

        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Register API error:", error);
        throw error;
    }
}
