// products/src/utils/client.js

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const { ApolloClient, InMemoryCache, HttpLink, gql } = require('@apollo/client');
const fetch = require('cross-fetch');
import dotenv from 'dotenv';
dotenv.config();

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

export default client;
export { gql };