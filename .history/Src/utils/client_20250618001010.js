// src/utils/client.js
import pkg from '@apollo/client';
import fetch from 'cross-fetch';
import dotenv from 'dotenv';
dotenv.config();

const { ApolloClient, InMemoryCache, HttpLink, gql } = pkg;

const endpoint = process.env.GRAPHQL_API_URL;

if (!endpoint) {
  throw new Error('❌ GRAPHQL_API_URL is not defined in .env');
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: endpoint,
    fetch,
  }),
  cache: new InMemoryCache(),
});

export de client
