// test/testOrder.js
import orders from '../src/modules/orders/index.js';

(async () => {
  console.log('📦 Fetching orders...');
  const result = await orders.fetchOrders();   // ⬅️  no args
  console.log('✅ Orders:', result);
})();
