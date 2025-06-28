import graphqlmodules from './index.js';

await graphqlModules.getCategoriesController();
await graphqlModules.getMasterCategoriesController();
await graphqlModules.getTopProductsController();

graphqlModules.listenToOrderUpdatesController((data) => {
  console.log(' Realtime Order Update:', data);
});
