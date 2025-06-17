import graphqlModules from '../index.js';


export const orderUpdatesTest = async () => 
try {
  const data = await graphqlModules.orderUpdates.listenToOrderUpdatesController();
  console.log(' Order Updates:', data);
} catch (err) {
  console.error(' Error:', err.message);
}