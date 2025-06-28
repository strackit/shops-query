import pkg from '@apollo/client';
import fetch from 'cross-fetch';

const { ApolloClient, InMemoryCache, HttpLink, gql, from } = pkg;

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
export { gql, from };
