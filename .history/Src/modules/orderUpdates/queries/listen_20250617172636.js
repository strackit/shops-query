import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

export const ORDER_UPDATES_SUBSCRIPTION = gql`
 query {
    orderUpdates {
      id
      status
      updatedAt
    }
  }
`;

export const subscribeToOrderUpdates = (callback) => {
  try {
    const observable = client.subscribe({
      query: ORDER_UPDATES_SUBSCRIPTION,
    });

    return observable.subscribe({
      next({ data }) {
        if (data?.orderUpdates) {
          callback(data.orderUpdates);
        }
      },
      error(err) {
        console.error('❌ Subscription error:', err);
      },
    });
  } catch (error) {
    console.error('❌ Failed to subscribe to order updates:', error);
    throw error;
  }
};
