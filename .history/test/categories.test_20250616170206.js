import { getCategoriesController } from '../../src/modules/categories/controller/get_/index.js';

export const fetchCategoriesTest = async () => {
  console.log('\n🔹 Categories');

  try {
    const shopId = 1; // ✅ Use a valid shopId
    console.log('🔸 Passing shopId to controller:', shopId);

    const result = await getCategoriesController(shopId); // ✅ Pass it here
    console.log('✅ Categories fetched:', result);
  } catch (err) {
    console.error('❌ Test Error:', err.message || err);
  }
};
