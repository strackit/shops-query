import client, { gql } from '../../../utils/apolloClient.js';

const GET_BALANCE = gql`
  query GetBalance($shopId: Int!, $customerId: Int!) {
    getBalance(shopId: $shopId, customerId: $customerId)
  }
`;

export const fetchBalance = async (shopId, customerId) => {
  try {
    const sId = parseInt(shopId, 10);
    const cId = parseInt(customerId, 10);
    
    if (isNaN(sId) || isNaN(cId)) {
      throw new Error(`shopId (${shopId}) and customerId (${customerId}) must be valid numbers.`);
    }

    console.log("DEBUG: GET_BALANCE Payload:", { shopId: sId, customerId: cId });

    const { data } = await client.query({
      query: GET_BALANCE,
      variables: {
        shopId: sId,
        customerId: cId,
      },
      fetchPolicy: 'no-cache',
    });

    console.log("DEBUG: GET_BALANCE Response Data:", JSON.stringify(data, null, 2));

    return data?.getBalance ?? 0;
  } catch (error) {
    console.error('Error fetching balance:', error.message || error);
    throw error;
  }
};
