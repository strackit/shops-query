// client.js

import { ApolloClient, InMemoryCache,split, HttpLink, gql } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_API || process.env.GRAPHQL_API_URL,
  }),
  cache: new InMemoryCache(),
});

export { gql }; // export gql for use in other modules
export default client;
