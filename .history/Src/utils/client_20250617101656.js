import { GraphQLClient, gql } from 'graphql-request';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const endpoint = process.env.GRAPHQL_API_URL;

const customFetch = (url, options) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Custom timeout exceeded')), 15000)
    )
  ]);
};

const client = new GraphQLClient(endpoint, {
  fetch: customFetch
});

export default client;
export { gql };
