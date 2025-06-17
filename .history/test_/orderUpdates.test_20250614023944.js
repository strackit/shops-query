import graphqlModules from '../index.js';

export const orderUpdatesTest = async () => {
  try {
    const data = await graphqlModules.orderUpdates.listenToOrderUpdatesController();

    if (data) {
      console.log('Order Updates Response:', JSON.stringify(data, null, 2));
    } else {
      console.warn('No response received from Order Updates.');
    }

    return data;
  } catch (err) {
    console.error('Order Updates Error:', err);
    return null;
  }
};

// orderUpdatesTest(); // Uncomment to run directly
