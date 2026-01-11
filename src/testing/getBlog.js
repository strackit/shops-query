import { fetchBlog } from '../modules/blog/controller/index.js';

(async () => {
    try {
        // Test data - replace with a valid shop ID from your database
        const shopId = 12; // Replace with a valid shop ID
        const result = await fetchBlog({ shopId });
        if (result) {
            console.log(result);

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
