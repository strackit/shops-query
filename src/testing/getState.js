import { fetchState } from '../modules/State/index.js';

(async () => {
    try {
        // Test data - replace with a valid pincode from your database
        const pincode = "624617"; // Mumbai pincode - replace with a valid one from your DB

        console.log('Testing fetchState with pincode:', pincode);
        console.log('-------------------------------------------');

        const result = await fetchState(pincode);

        console.log('✅ State data fetched successfully!');
        console.log('-------------------------------------------');
        console.log('Result:', JSON.stringify(result, null, 2));
        console.log('-------------------------------------------');

        // Validate the response structure
        if (result) {
            console.log('\n📋 State Data Summary:');
            console.log('Pin Code:', result.pinCode);
            console.log('State:', result.state);
            console.log('District:', result.district);
            console.log('Name:', result.name);
            console.log('Region:', result.region);
            console.log('Division:', result.division);
        } else {
            console.log('⚠️ No state data found for this pincode');
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
