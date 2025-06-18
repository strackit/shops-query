// client.js

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_API || process.env.REACT_APP_GRAPHQL_API,
  }),
  cache: new InMemoryCache(),
});

export default client;
