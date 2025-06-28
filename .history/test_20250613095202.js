import graphqlmodules from './index.js';

await graphqlmodules.getCategoriesController();
await graphqlodules.getMasterCategoriesController();
await graphqlModules.getTopProductsController();

graphqlModules.listenToOrderUpdatesController((data) => {
  console.log(' Realtime Order Update:', data);
});
