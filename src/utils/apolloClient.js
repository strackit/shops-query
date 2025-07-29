import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client/core/index.js';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.shop.strackit.com/graphql',
    fetch
  }),
  cache: new InMemoryCache()
});
export default client;
export { gql };
