import { getShippingZoneRates } from '../modules/ShippingZoneRate/index.js';
import { getShippingZoneRates as getRatesFromController } from '../modules/ShippingZoneRate/Controller/index.js';
import { fetchShippingCost } from '../modules/ShippingZoneRate/queries/index.js';

async function testShippingZoneRates() {
  const shopId = 538;
  const pincode = 624617;

  // Test 1: getShippingZoneRates from modules/ShippingZoneRate/index.js
  try {
    const rates = await getShippingZoneRates(shopId, pincode);
  } catch (error) {
    console.error('❌ Error in getShippingZoneRates:', error.message || error);
  }

  // Test 2: getShippingZoneRates from Controller/index.js
  try {
    const controllerRates = await getRatesFromController(shopId, pincode);
  } catch (error) {
    console.error('❌ Error in Controller getShippingZoneRates:', error.message || error);
  }

  // Test 3: fetchShippingCost from queries/index.js
  try {
    const queryRates = await fetchShippingCost(shopId, pincode);
  } catch (error) {
    console.error('❌ Error in queries fetchShippingCost:', error.message || error);
  }
}

testShippingZoneRates();
