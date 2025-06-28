// test/testpayment.js
import payment from '../src/modules/payment/index.js';

(async () => {
  const vars = {
    amount: 1499,
    name: 'John Doe',
    number: 'INV-2025-04',           // or whatever order/invoice number you use
    phonePeId: 'your_phonepe_id',
    phonePeKey: 'your_phonepe_key',
    domain: 'yourdomain.com'
  };

  console.log('💸 Initiating payment...');
  const res = await payment.initiatePayment(vars);
  console.log('✅ Payment Response:', res);

  // Optional: check status if needed
  // const status = await payment.checkPaymentStatus(yourOrderId);
  // console.log('📦 Payment Status:', status);
})();
