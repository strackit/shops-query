import { client } from '../src/utils/apolloClient.js'; // ✅ named import
import { GET_PRODUCT_REVIEWS } from '../src/modules/ratings/queries/get.js';

(async () => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCT_REVIEWS,
      variables: {
        filters: {          // ✅ Correct field name (as per schema)
          productId: 12     // 🔁 Change this to any valid product ID
        }
      }
    });

    console.log('✅ Product Reviews:', data.productReviews);
  } catch (err) {
    console.error('❌ Error fetching product reviews:', JSON.stringify(err, null, 2));
  }
})();
