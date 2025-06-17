import { listenToOrderUpdates } from '../subscriptions/listen.js';

export const orderUpdatesController = () => {
  console.log('🔔 Listening to Order Updates...');
  listenToOrderUpdates((update) => {
    console.log('🚚 Order Update:', update);
  });
};
