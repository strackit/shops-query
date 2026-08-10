import { INITIATE_PAYMENT, CHECK_PAYMENT_STATUS } from '../mutation/index.js';

export async function initiatePayment(vars) {
  return await INITIATE_PAYMENT(vars);
}

export async function checkPaymentStatus(transactionId, phonePeId, phonePeKey) {
  return await CHECK_PAYMENT_STATUS(transactionId, phonePeId, phonePeKey);
}
