import graphqlModules from '../index.js';

export const testOrderUpdates = async () => {
  try {
    const data = await graphqlModules.listenToOrderUpdatesController();
    console.log('✅ Order Updates:', data);
  } catch (err) {
    console.error('❌ Order Updates Error:', err.message || err);
  }
};

// Auto-run for testing
await testOrderUpdates();
