// src/utils/apolloClient.js

import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client/core/index.js'; // ✅ use full path
import fetch from 'cross-fetch';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql',
    fetch
  }),
  cache: new InMemoryCache()
});

export { gql };
