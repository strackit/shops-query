import { verifyMobile } from '../modules/forgotpassword/controller/index.js';

(async () => {
    try {
        // Test data - replace with a valid mobile number
        const testMobile = '6383306541'; // Replace with a valid mobile number

        console.log('Testing verifyMobile with mobile:', testMobile);
        console.log('-------------------------------------------');

        const result = await verifyMobile(testMobile);

        console.log('✅ Mobile verification request sent successfully!');
        console.log('-------------------------------------------');
        console.log('Result:', JSON.stringify(result, null, 2));
        console.log('-------------------------------------------');

        // Validate the response structure
        if (result) {
            console.log('\n📋 Verify Mobile Response Summary:');
            console.log('Status:', result.status || 'N/A');
            console.log('Message:', result.message || 'N/A');
            console.log('Success:', result.success !== undefined ? result.success : 'N/A');

            if (result.success === true || result.status === 'success') {
                console.log('✅ Mobile number verified successfully!');
            } else if (result.success === false || result.status === 'error') {
                console.log('⚠️ Mobile verification failed:', result.message || 'Unknown error');
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
