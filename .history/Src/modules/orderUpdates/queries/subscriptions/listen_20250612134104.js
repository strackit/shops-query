// src/modules/orderUpdates/queries/subscribe.js
import { createClient } from 'graphql-ws';
import WebSocket from 'ws';

const wsClient = createClient({
  url: 'wss://test.api.shop.strackit.com/graphql',
  webSocketImpl: WebSocket,
});

const ORDER_UPDATES_SUBSCRIPTION = `
  subscription {
    orderUpdates {
      id
      status
      updatedAt
    }
  }
`;

export const listenToOrderUpdates = (onMessage) => {
  return wsClient.subscribe(
    {
      query: ORDER_UPDATES_SUBSCRIPTION,
    },
    {
      next: (data) => {
        if (data.data?.orderUpdates) {
          console.log('📦 New Order Update Received:', data.data.orderUpdates);
          onMessage(data.data.orderUpdates);
        }
      },
      error: (err) => console.error('❌ Subscription error:', err),
      complete: () => console.log('✅ Subscription complete.'),
    }
  );
};
