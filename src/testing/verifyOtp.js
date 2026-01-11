import { verifyOtp } from '../modules/forgotpassword/controller/index.js';

(async () => {
    try {
        // Test data - replace with valid mobile number and OTP
        const testMobile = '6383306541'; // Replace with the mobile number used in verifyMobile
        const testOtp = '962921'; // Replace with the OTP received

        console.log('Testing verifyOtp with mobile:', testMobile);
        console.log('Testing verifyOtp with OTP:', testOtp);
        console.log('-------------------------------------------');

        const result = await verifyOtp(testMobile, testOtp);

        console.log('✅ OTP verification request sent successfully!');
        console.log('-------------------------------------------');
        console.log('Result:', JSON.stringify(result, null, 2));
        console.log('-------------------------------------------');

        // Validate the response structure
        if (result) {
            console.log('\n📋 Verify OTP Response Summary:');
            console.log('Status:', result.status || 'N/A');
            console.log('Message:', result.message || 'N/A');
            console.log('Success:', result.success !== undefined ? result.success : 'N/A');

            if (result.success === true || result.status === 'success') {
                console.log('✅ OTP verified successfully!');
                console.log('You can now proceed to reset the password.');
            } else if (result.success === false || result.status === 'error') {
                console.log('⚠️ OTP verification failed:', result.message || 'Unknown error');
                console.log('Please check if the OTP is correct and not expired.');
            }

            // Additional validation
            if (result.data) {
                console.log('\n📦 Additional Data:');
                console.log(JSON.stringify(result.data, null, 2));
            }
        } else {
            console.log('⚠️ No response received from the API');
        }

    } catch (error) {
        console.error('❌ Test error:', error.message || error);
        if (error.cause) {
            console.error('Error cause:', error.cause);
        }
        console.error('Stack trace:', error.stack);
    }
})();
