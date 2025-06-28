// For HTTP
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import fetch from 'cross-f'
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://test.api.shop.strackit.com/graphql', fetch }),
  cache: new InMemoryCache(),
});

export default client;
