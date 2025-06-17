import graphqlModules from '../index.js';

export const testOrderUpdates = async () => {
  try {
    const data = await graphqlModules.orderUpdates.listenToOrderUpdatesController();
    console.log('Order Updates:', data);
  } catch (err) {
    console.error('Order Updates Error:', err.message || err);
  }
};

