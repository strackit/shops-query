// utils/client.js
import { ApolloClient, InMemoryCache, HttpLink,gql } from '@apollo/client/core';
import fetch from 'cross-fetch';
import dotenv from 'dotenv';
dotenv.config();

const endpoint = process.env.GRAPHQL_API_URL;

if (!endpoint) {
  throw new Error('❌ GRAPHQL_API_URL is not defined in .env');
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: endpoint,
    fetch, // required in Node
  }),
  cache: new InMemoryCache(),
});

export default client;
