import { resetPassword } from '../modules/forgotpassword/controller/index.js';

(async () => {
    try {
        // Test data - replace with valid mobile number and new password
        const testMobile = '6383306541'; // Replace with the mobile number used in verifyMobile/verifyOtp
        const testPassword = '111111'; // Replace with the new password

        console.log('Testing resetPassword with mobile:', testMobile);
        console.log('Testing resetPassword with password:', '***' + testPassword.slice(-4)); // Mask password for security
        console.log('-------------------------------------------');

        const result = await resetPassword(testMobile, testPassword);

        console.log('✅ Password reset request sent successfully!');
        console.log('-------------------------------------------');
        console.log('Result:', JSON.stringify(result, null, 2));
        console.log('-------------------------------------------');

        // Validate the response structure
        if (result) {
            console.log('\n📋 Reset Password Response Summary:');
            console.log('Status:', result.status || 'N/A');
            console.log('Message:', result.message || 'N/A');
            console.log('Success:', result.success !== undefined ? result.success : 'N/A');

            if (result.success === true || result.status === 'success') {
                console.log('✅ Password reset successfully!');
                console.log('You can now login with the new password.');
            } else if (result.success === false || result.status === 'error') {
                console.log('⚠️ Password reset failed:', result.message || 'Unknown error');
                console.log('Please ensure you have completed OTP verification first.');
            }

            // Additional validation
            if (result.data) {
                console.log('\n📦 Additional Data:');
                console.log(JSON.stringify(result.data, null, 2));
            }
        } else {
            console.log('⚠️ No response received from the API');
        }

        // Password strength validation (client-side check)
        console.log('\n🔒 Password Strength Check:');
        const hasUpperCase = /[A-Z]/.test(testPassword);
        const hasLowerCase = /[a-z]/.test(testPassword);
        const hasNumber = /[0-9]/.test(testPassword);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(testPassword);
        const isLongEnough = testPassword.length >= 8;

        console.log('Has uppercase:', hasUpperCase ? '✅' : '❌');
        console.log('Has lowercase:', hasLowerCase ? '✅' : '❌');
        console.log('Has number:', hasNumber ? '✅' : '❌');
        console.log('Has special character:', hasSpecialChar ? '✅' : '❌');
        console.log('Length >= 8:', isLongEnough ? '✅' : '❌');

        const isStrongPassword = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough;
        console.log('\nOverall strength:', isStrongPassword ? '✅ Strong' : '⚠️ Weak');

    } catch (error) {
        console.error('❌ Test error:', error.message || error);
        if (error.cause) {
            console.error('Error cause:', error.cause);
        }
        console.error('Stack trace:', error.stack);
    }
})();
