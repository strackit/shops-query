// /utils/wsClient.js
import { createClient } from 'graphql-ws';

const wsClient = createClient({
  url: 'wss://test.api.shop.strackit.com/graphql', // WebSocket endpoint (must start with wss://)
});

export default wsClient;
