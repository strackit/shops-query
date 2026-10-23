import { INITIATE_PAYMENT, CHECK_PAYMENT_STATUS } from '../mutation/index.js';

export async function initiatePayment(vars) {
  return await INITIATE_PAYMENT(vars);
}

export async function checkPaymentStatus(arg1, arg2, arg3, arg4) {
  // Overload 1: Unified object call
  if (typeof arg1 === 'object' && arg1 !== null) {
    return await CHECK_PAYMENT_STATUS(arg1);
  }

  const transactionId = arg1;
  // Overload 2: If 4th argument is present, treat as V2 (transactionId, clientId, clientSecret, clientVersion)
  if (arg4 !== undefined && arg4 !== null) {
    return await CHECK_PAYMENT_STATUS({
      transactionId,
      clientId: arg2,
      clientSecret: arg3,
      clientVersion: Number(arg4) || 1,
      version: 'v2',
    });
  }

  // Overload 3: Legacy V1 positional call: checkPaymentStatus(transactionId, phonePeId, phonePeKey)
  return await CHECK_PAYMENT_STATUS({
    transactionId,
    phonePeId: arg2,
    phonePeKey: arg3,
    version: 'v1',
  });
}
