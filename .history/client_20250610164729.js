// client.js
const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client/core');
const fetch = require('cross-fetch');

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://your-api/graphql', fetch }),
  cache: new InMemoryCache(),
});

module.exports = client;
