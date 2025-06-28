import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({ uri: '', fetch }),
  cache: new InMemoryCache(),
});

export default client;
