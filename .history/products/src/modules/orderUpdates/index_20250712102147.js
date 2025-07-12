import {} subscribeToOrderUpdatesController = (callback) => {
  console.log('📡 Subscribing to order updates...');
  return subscribeToOrderUpdates((update) => {
    console.log('🔄 Order Update Received:', update);
    callback(update);
  });
};
