// src/modules/orderUpdates/controller/subscribe/index.js
import { subscribeToOrderUpdates } from '../../queries/subscribe.js';

/**
 * Subscribes to real-time order updates.
 * @param {Function} callback - Function to execute on each update.
 */
export const subscribeOrderUpdatesController = (callback) => {
  return subscribeToOrderUpdates(callback);
};
