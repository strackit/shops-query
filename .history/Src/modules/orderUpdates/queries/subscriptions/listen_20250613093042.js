// src/modules/orderUpdates/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

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
  try {
    return client.subscribe({
      query: ORDER_UPDATES_SUBSCRIPTION,
    }).subscribe({
      next({ data }) {
        callback(data.orderUpdates);
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
