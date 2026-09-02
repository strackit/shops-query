import { fetchBalance } from '../../queries/get.js';

export const getBalanceController = async (shopId, customerId) => {
  try {
    return await fetchBalance(shopId, customerId);
  } catch (error) {
    console.error('Controller failed to fetch balance:', error.message || error);
    throw error;
  }
};
