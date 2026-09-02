import client, { gql } from '../../../utils/apolloClient.js';

const ADD_STATEMENT = gql`
  mutation AddStatement($shopId: Int!, $customerId: Int!, $amount: Float!, $type: String!, $ledgerId: Int!, $remarks: String) {
    addStatement(shopId: $shopId, customerId: $customerId, amount: $amount, type: $type, ledgerId: $ledgerId, remarks: $remarks) {
      amount
    }
  }
`;

export const addStatementMutation = async (shopId, customerId, amount, type, ledgerId, remarks) => {
  try {
    const sId = parseInt(shopId, 10);
    const cId = parseInt(customerId, 10);
    const lId = parseInt(ledgerId, 10);
    
    if (isNaN(sId) || isNaN(cId) || isNaN(lId)) {
      throw new Error(`shopId (${shopId}), customerId (${customerId}), and ledgerId (${ledgerId}) must be valid numbers.`);
    }

    console.log("DEBUG: ADD_STATEMENT Payload:", { shopId: sId, customerId: cId, amount: parseFloat(amount), type, ledgerId: lId, remarks });

    const { data } = await client.mutate({
      mutation: ADD_STATEMENT,
      variables: {
        shopId: sId,
        customerId: cId,
        amount: parseFloat(amount),
        type,
        ledgerId: lId,
        remarks,
      },
    });

    console.log("DEBUG: ADD_STATEMENT Response Data:", JSON.stringify(data, null, 2));

    return data?.addStatement;
  } catch (error) {
    console.error('Error adding statement:', error.message || error);
    throw error;
  }
};
