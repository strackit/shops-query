import pkg from '@apollo/client';
import fetch from 'cross-fetch';

const { ApolloClient, InMemoryCache, HttpLink, gql, from } = pkg;

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});

export { gql };
