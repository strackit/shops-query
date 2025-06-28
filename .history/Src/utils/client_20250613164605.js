// Import Apollo packages (CommonJS interop support)
import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache, HttpLink, gql } = pkg;

// Node.js-compatible fetch
import fetch from 'cross-fetch';

// Apollo Client setup
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql', // ✅ Your GraphQL endpoint
    fetch, // ✅ Required for SSR or Node.js
  }),
  cache: new InMemoryCache(), // ✅ In-memory caching layer
});

// Export Apollo client and gql for query/mutation use
export default client;
export { gql };
