import { addStatementMutation } from '../../mutations/add.js';

export const addStatementController = async (shopId, customerId, amount, type, ledgerId, remarks) => {
  try {
    return await addStatementMutation(shopId, customerId, amount, type, ledgerId, remarks);
  } catch (error) {
    console.error('Controller failed to add statement:', error.message || error);
    throw error;
  }
};
