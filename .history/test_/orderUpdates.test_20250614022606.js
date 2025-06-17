import graphqlModules from '../index.js';


export const
try {
  const data = await graphqlModules.orderUpdates.listenToOrderUpdatesController();
  console.log(' Order Updates:', data);
} catch (err) {
  console.error(' Error:', err.message);
}