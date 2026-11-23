import { fetchWhyChooseUs } from '../modules/whyChooseUs/controller/index.js';

(async () => {
  try {
    const shopId = 462;
    console.log('Testing fetchWhyChooseUs with shopId:', shopId);
    console.log('-------------------------------------------');

    const result = await fetchWhyChooseUs({ filter: { shopId } });

    console.log('✅ WhyChooseUs fetched successfully!');
    console.log('Result:', JSON.stringify(result, null, 2));

    if (Array.isArray(result) && result.length) {
      console.log(`\n📋 Total items: ${result.length}`);
      result.forEach((i) => console.log(`- #${i.id} "${i.title}" (position ${i.position}, file: ${i.file_path || 'none'})`));
    } else {
      console.log('⚠️ No WhyChooseUs data found for this shop ID');
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
