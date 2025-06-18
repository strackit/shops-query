import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

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
      const { orderUpdates } = await client.request(GET_ORDER_UPDATES);
      if (orderUpdates) callback(orderUpdates);
    } catch (err) {
      console.error('❌ Polling failed:', err.message || err);
    }
  }, interval);

  return () => clearInterval(timer); // unsubscribe function
};