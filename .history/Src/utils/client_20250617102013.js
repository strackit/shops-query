// utils/client.js
import { GraphQLClient, gql } from 'graphql-request';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

// Custom timeout logic (20 seconds)
const customFetch = (url, options) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('⏱️ Custom Timeout Exceeded')), 20000)
    ),
  ]);
};

const client = new GraphQLClient(process.env.GRAPHQL_API_URL, {
  fetch: customFetch,
});

export default client;
export { gql };
