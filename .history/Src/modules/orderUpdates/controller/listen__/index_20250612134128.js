// src/modules/orderUpdates/controller/subscribe.js
import { listenToOrderUpdates } from '../queries/subscribe.js';

export const listenToOrderUpdatesController = () => {
  listenToOrderUpdates((update) => {
    console.log('📬 Order Update in Controller:', update);
    // You can handle UI notification, DB logging, or trigger side-effects here.
  });
};
