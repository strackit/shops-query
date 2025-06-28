import client, { gql } from './src/utils/client.js';
import graphqlModules from './src/index.js'; // or './src/modules/index.js'

// Example: test the getCategoriesController
async function testCategories() {
  try {
    // Assuming your controller returns a query object or runs the query
    const query = graphqlModules.getCategoriesController;

    // If it returns a gql query:
    const result = await client.query({ query: gql`${query}` });

    // If it already returns gql-tagged query, just use:
    // const result = await client.query({ query });

    console.log('Categories:', result.data);
  } catch (error) {
    console.error(' Error fetching categories:', error);
  }
}

testCategories();
