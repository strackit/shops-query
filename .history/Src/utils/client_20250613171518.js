import pkg from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink, gql } = pk
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
export { gql };
