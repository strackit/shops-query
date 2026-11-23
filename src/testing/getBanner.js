import { fetchBanner } from '../modules/banner/controller/index.js';

(async () => {
  try {
    const shopId = 462;
    console.log('Testing fetchBanner with shopId:', shopId);
    console.log('-------------------------------------------');

    const result = await fetchBanner({ shopId });

    console.log('✅ Banners fetched successfully!');
    console.log('Result:', JSON.stringify(result, null, 2));

    if (Array.isArray(result) && result.length) {
      console.log(`\n📋 Total banners: ${result.length}`);
      result.forEach((b) => {
        console.log(`- #${b.id} "${b.title}" | image: ${!!b.image} | video: ${b.video || 'none'} | video_size: ${b.video_size ?? 'n/a'}`);
      });
    } else {
      console.log('⚠️ No banners found for this shop ID');
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
