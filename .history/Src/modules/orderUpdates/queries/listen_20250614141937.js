// src/modules/order/subscription/index.js
import { gql } from '../../../utils/client.js';
import wsClient from '../../../utils/wsClient.js';

export const ORDER_UPDATES_SUBSCRIPTION = gql`
  subscription {
    orderUpdates {
      id
      status
      updatedAt
    }
  }
`;

export const subscribeToOrderUpdates = (callback) => {
  return wsClient.subscribe(
    {
      query: ORDER_UPDATES_SUBSCRIPTION,
    },
    {
      next: ({ data }) => {
        if (data?.orderUpdates) {
          callback(data.orderUpdates);
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
      },
      complete: () => {
        console.log('Subscription completed.');
      },
    }
  );
};
