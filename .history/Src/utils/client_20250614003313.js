import { ApolloClient, InMemoryCache, HttpLink, gql, from } from '@apollo/client/core';
import fetch from 'cross-fetch';

// Apollo Client instance for Node.js
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});

// Export Apollo client and gql
export default client;
export { gql };
