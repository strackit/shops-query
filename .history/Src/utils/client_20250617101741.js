// src/utils/client.js

import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the API URL from environment variables
const endpoint = process.env.GRAPHQL_API_URL;

console.log('🌐 GraphQL Endpoint:', endpoint);
// Fallback if not set (optional)
if (!endpoint) {
  console.error('❌ GRAPHQL_API_URL not defined in .env');
  process.exit(1); // Stop execution if not defined
}

// Create GraphQL client
const client = new GraphQLClient(endpoint);

export default client;
export { gql }
