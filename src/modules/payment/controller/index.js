import {
  INITIATE_PAYMENT,
  INITIATE_PHONEPE_OAUTH_PAYMENT,
  CHECK_PAYMENT_STATUS,
  CHECK_PHONEPE_OAUTH_PAYMENT_STATUS,
} from '../mutation/index.js';

export async function initiatePayment(vars) {
  return await INITIATE_PAYMENT(vars);
}

export async function checkPaymentStatus(transactionId, phonePeId, phonePeKey) {
  return await CHECK_PAYMENT_STATUS(transactionId, phonePeId, phonePeKey);
}

export async function initiatePhonePeOAuthPayment(vars) {
  return await INITIATE_PHONEPE_OAUTH_PAYMENT(vars);
}

export async function checkPhonePeOAuthPaymentStatus(transactionId, accessToken) {
  return await CHECK_PHONEPE_OAUTH_PAYMENT_STATUS(transactionId, accessToken);
}
