// src/modules/orderUpdates/controller/subscribe/index.js
import { subscribeToOrderUpdates } from '../../queries/listen.js';

/**
 * Subscribes to real-time order updates.
 * @param {Function} callback - Function to execute on each update.
 */
export const subscribeToOrderUpdatesController = (callback) => {
  // Forward the callback to the subscription utility
  return subscribeToOrderUpdates(callback);
};
