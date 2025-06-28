// testAddress.js

import { fetchAddress } from '../src/modules/address/queries/get.js'; // ✅ this exports the function

async function run() {
  try {
    const filter = {
      userId: 1 // 👈 Replace with actual existing userId in your DB if needed
    };

    const data = await fetchAddress(filter); // ✅ correct function
    console.log("✅ Address fetched:\n", data);
  } catch (err) {
    console.error("❌ Error fetching address:", err);
  }
}

run();
