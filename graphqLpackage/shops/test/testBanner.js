// test/testBanner.js
import { client } from '../src/utils/apolloClient.js';
import { GET_BANNERS } from '../src/modules/banner/queries/get.js';

const run = async () => {
  try {
    console.log('📦 Sending filter: { shopId: 1 }');
    const { data } = await client.query({
      query: GET_BANNERS,
      variables: {
        filter: {
          shopId: 1
        }
      }
    });

    console.log('✅ Banners fetched:', data.banners);
  } catch (err) {
    console.error('❌ Error fetching banners:', JSON.stringify(err, null, 2));
  }
};

run();
