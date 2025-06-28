import graphqlmodules from './index.js';

await graphqlmodules.getCategoriesController();
await graphqlModules.getMasterCategoriesController();
await graphqlModules.getTopProductsController();

graphqlModules.listenToOrderUpdatesController((data) => {
  console.log(' Realtime Order Update:', data);
});
