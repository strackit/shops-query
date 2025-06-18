// client.js
import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache, HttpLink, gql } = pkg;

// Create an HTTP link
const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_API_URL, // Adjust if needed
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export { gql };
export default client;
