// client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import fetch from 'cross-fetch';

// API endpoint
const httpLink = createHttpLink({
  uri: 'https://test.api.shop.strackit.com/graphql',
  fetch,
});

// Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
