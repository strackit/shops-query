import { ORDER_UPDATES_SUBSCRIPTION } from '../../queries/listen.js';
import client from '../../../../utils/client.js';

export const listenToOrderUpdates = (onMessage) => {
  try {
    const observable = client.subscribe({
      query: ORDER_UPDATES_SUBSCRIPTION,
    });

    const subscription = observable.subscribe({
      next(response) {
        const update = response.data?.orderUpdates;
        if (update) {
          console.log('📦 New Order Update Received:', update);
          onMessage(update);
        }
      },
      error(err) {
        console.error('❌ Subscription error:', err);
      },
      complete() {
        console.log('✅ Subscription complete.');
      },
    });

    return subscription; // ✅ Good practice for later unsubscribe
  } catch (err) {
    console.error('❌ Failed to initialize subscription:', err);
  }
};
