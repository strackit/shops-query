import { fetchCustomerMessages } from '../src/modules/customerMessage/index.js';

const run = async () => {
  try {
    console.log('📦 Fetching customer messages...');
    const messages = await fetchCustomerMessages({ shopId: 101, userId: 1 });
    console.log('✅ Messages fetched:', messages);
  } catch (err) {
    console.error('❌ Error fetching message:', err);
  }
};

run();
