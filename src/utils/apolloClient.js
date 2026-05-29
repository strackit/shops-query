import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client/core/index.js';
import fetch from 'cross-fetch';

export const GRAPHQL_ENDPOINT = 'https://test.api.shop.strackit.com/graphql';

const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    fetch
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all', // Return both data and errors
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all', // Return both data and errors
    },
    mutate: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all', // Return both data and errors
    }
  }
});

export default client;
export { gql };
