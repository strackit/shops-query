// test/testPromotion.js
import promotion from '../src/modules/promotion/index.js';

(async () => {
  try {
    console.log('🔍 Fetching coupons for shopId = 1 …');

    const coupons = await promotion.fetchCoupons({ shopId: 1 }); // change shopId if needed

    if (!coupons || coupons.length === 0) {
      console.log('⚠️  No coupons found for this shop.');
    } else {
      console.log('✅ Coupons:', coupons);
    }
  } catch (err) {
    console.error('❌ Error fetching coupons:', err.message);
    if (err.networkError?.result?.errors) {
      console.error('🧠 Server says:', err.networkError.result.errors);
    }
  }
})();
