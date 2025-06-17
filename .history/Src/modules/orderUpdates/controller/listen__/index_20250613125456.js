// src/modules/orderUpdates/controller/index.js
import { ORDER_UPDATES_SUBSCRIPTION } from '../../queries/listen.js';
import client from '../../../../utils/client.js'; // ✅ Correct relative path

export const listenToOrderUpdatesController = (onMessage) => {
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

    return subscription; // Optional: Unsubscribe later if needed
  } catch (err) {
    console.error('❌ Failed to initialize subscription:', err);
  }
};
