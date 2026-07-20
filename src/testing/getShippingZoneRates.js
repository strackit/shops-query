import { getShippingZoneRates } from '../modules/ShippingZoneRate/index.js';
import { getShippingZoneRates as getRatesFromController } from '../modules/ShippingZoneRate/Controller/index.js';
import { fetchShippingCost } from '../modules/ShippingZoneRate/queries/index.js';

async function testShippingZoneRates() {
  const shopId = 538;
  const pincode = 624617;

  console.log(`===========================================`);
  console.log(`Testing ShippingZoneRate Module (Updated Controller & Queries)`);
  console.log(`Input Parameters -> shopId: ${shopId}, pincode: ${pincode}`);
  console.log(`===========================================\n`);

  // Test 1: getShippingZoneRates from modules/ShippingZoneRate/index.js
  try {
    console.log('1. Testing getShippingZoneRates from modules/ShippingZoneRate/index.js...');
    const rates = await getShippingZoneRates(shopId, pincode);
    console.log('✅ getShippingZoneRates Result:');
    console.log(JSON.stringify(rates, null, 2));
    console.log(`Total Rates Returned: ${rates.length}\n`);
  } catch (error) {
    console.error('❌ Error in getShippingZoneRates:', error.message || error);
  }

  // Test 2: getShippingZoneRates from Controller/index.js
  try {
    console.log('2. Testing getShippingZoneRates from Controller/index.js...');
    const controllerRates = await getRatesFromController(shopId, pincode);
    console.log('✅ Controller getShippingZoneRates Result:');
    console.log(JSON.stringify(controllerRates, null, 2));
    console.log(`Total Rates Returned: ${controllerRates.length}\n`);
  } catch (error) {
    console.error('❌ Error in Controller getShippingZoneRates:', error.message || error);
  }

  // Test 3: fetchShippingCost from queries/index.js
  try {
    console.log('3. Testing fetchShippingCost from queries/index.js...');
    const queryRates = await fetchShippingCost(shopId, pincode);
    console.log('✅ queries fetchShippingCost Result:');
    console.log(JSON.stringify(queryRates, null, 2));
    console.log(`Total Rates Returned: ${queryRates.length}\n`);
  } catch (error) {
    console.error('❌ Error in queries fetchShippingCost:', error.message || error);
  }
}

testShippingZoneRates();
