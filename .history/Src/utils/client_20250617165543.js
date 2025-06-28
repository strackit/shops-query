// client.js
import pkg from '@apollo/client';
import { ApolloClient, InMemoryCache,split, HttpLink, gql, getMainDefinition } = pkg={};
import { createClient } from 'graphql-ws';


const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API || process.env.GRAPHQL_API_URL,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.VITE_GRAPHQL_WS || 'ws://localhost:4000/graphql',
  })
);

// Split based on operation type
const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return def.kind === 'OperationDefinition' && def.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export { gql }; // export gql for use in other modules
export default client;
