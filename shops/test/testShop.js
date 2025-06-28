import shop from '../src/modules/shop/index.js';

(async () => {
  try {
    const result = await shop.fetchShops({ shopName: "Strackit" });

    if (!result || result.length === 0) {
      console.log('⚠️ No shops found for the given filter.');
    } else {
      console.log('✅ Shop data:', result);
    }
  } catch (err) {
    console.error('❌ Error fetching shops:', err.message);
    if (err.networkError?.result?.errors) {
      console.error('🧠 Server message:', err.networkError.result.errors);
    }
  }
})();
