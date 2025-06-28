// src/utils/client.js
import pkg from '@apollo/client';
import fetch from 'cross-fetch';

// Destructure needed exports from the default import
const { ApolloClient, InMemoryCache, HttpLink, gql, split } = pkg;

// Create Apollo Client instance
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});

// Export client and gql
export { client as default, gql };
