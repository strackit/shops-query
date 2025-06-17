import { createClient } from 'graphql-ws';
import WebSocket from 'ws';
import { ORDER_UPDATES_SUBSCRIPTION } from '../queries/get.js';

const wsClient = createClient({
  url: 'wss://test.api.shop.strackit.com/graphql',
  webSocketImpl: WebSocket,
});

export const listenToOrderUpdatesController = (onMessage) => {
  return wsClient.subscribe(
    {
      query: ORDER_UPDATES_SUBSCRIPTION.loc.source.body, // Extract raw query string
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
