import { gql } from '../../../products/src/utils/client.js';
import client from '../../../products/src/utils/client.js';

export const ORDER_UPDATES_SUBSCRIPTION = gql`
query{
    orderUpdates {
      id
      status
      updatedAt
    }
  }
`;

export const subscribeToOrderUpdates = (callback, interval = 5000) => {
  const timer = setInterval(async () => {
    try {
      const data = await client.request(GET_ORDER_UPDATES);
      if (data?.orderUpdates) {
        callback(data.orderUpdates);
      }
    } catch (error) {
      console.error('❌ Polling Error:', error.message || error);
    }
  }, interval);

  // Return an unsubscribe function to stop polling
  return {
    unsubscribe: () => clearInterval(timer),
  };
};