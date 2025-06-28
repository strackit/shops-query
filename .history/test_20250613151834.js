// test.js
import apollo from '@apollo/client/core/core.cjs';
const { ApolloClient, InMemoryCache, HttpLink, gql } = apollo;
import graphqlModules from './index.js';

const runAllQueriesAndMutations = async () => {
  try {
    console.log('\n🚀 Running GraphQL Tests...\n');

   
  } catch (err) {
    console.error('❌ Error in running tests:', err);
  }
};

runAllQueriesAndMutations();
