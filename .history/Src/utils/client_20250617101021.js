import fetch from 'node-fetch'; // If needed
import { GraphQLClient, gql } from 'graphql-request';
import dotenv from 'dotenv';
dotenv.config();

const endpoint = process.env.GRAPHQL_API_URL;

const client = new GraphQLClient(endpoint, {
  fetch, // custom fetch
  timeout: 5000,
});

export default client;
export { gql };
