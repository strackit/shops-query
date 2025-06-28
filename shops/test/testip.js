import { fetchIpAddress } from '../src/modules/ipaddress/index.js';

const run = async () => {
  try {
    console.log('📦 Fetching IP address...');
    const ip = await fetchIpAddress();
    console.log('✅ IP fetched:', ip);
  } catch (err) {
    console.error('❌ Error fetching IP:', err);
  }
};

run();
