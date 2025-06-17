import graphqlmodules from './index.js';

await graphqlodules.getCategoriesController();
await graphqlModules.getMasterCategoriesController();
await graphqlModules.getTopProductsController();

graphqlModules.listenToOrderUpdatesController((data) => {
  console.log(' Realtime Order Update:', data);
});
