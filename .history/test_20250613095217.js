import graphqlmodules from './index.js';

await graphqlmodules.getCategoriesController();
await graphqlmodules.getMasterCategoriesController();
await graphql-project/modules.getTopProductsController();

graphqlModules.listenToOrderUpdatesController((data) => {
  console.log(' Realtime Order Update:', data);
});
