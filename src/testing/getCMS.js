import { fetchcms } from '../modules/cms/controller/index.js';

(async () => {
    try {
        // Test data - replace with a valid shop ID from your database
        const shopId = 12; // Replace with a valid shop ID

        console.log('Testing fetchcms with shopId:', shopId);
        console.log('-------------------------------------------');

        const result = await fetchcms(shopId);

        console.log('✅ CMS data fetched successfully!');
        console.log('-------------------------------------------');
        console.log('Result:', JSON.stringify(result, null, 2));
        console.log('-------------------------------------------');

        // Validate the response structure
        if (result) {
            console.log('\n📋 CMS Data Summary:');
            console.log('Shop ID:', result.shopId);
            console.log('Has Cancellation Policy:', result.cancellationPolicy);
            console.log('Has Payment Security:', !!result.paymentSecurity);
            console.log('Has Privacy Policy:', !!result.privacyPolicy);
            console.log('Has Returns Policy:', !!result.returnsPolicy);
            console.log('Has Terms and Conditions:', !!result.termsAndConditions);
            console.log('Has Terms of Use:', !!result.termsOfUse);
        } else {
            console.log('⚠️ No CMS data found for this shop ID');
        }

    } catch (error) {
        console.error('❌ Test error:', error.message || error);
        if (error.graphQLErrors) {
            console.error('GraphQL Errors:', JSON.stringify(error.graphQLErrors, null, 2));
        }
        if (error.networkError) {
            console.error('Network Error:', error.networkError);
        }
    }
})();
