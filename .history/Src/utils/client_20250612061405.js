import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://test.api.shop.strackit.com/graphql';

// Add token here if private API requires auth
const client = new GraphQLClient(endpoint, {
  headers: {
    // Authorization: `Bearer YOUR_TOKEN_HERE`
  },
});

export default client;
