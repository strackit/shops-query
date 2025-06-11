// client.js
const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client/core');
const fetch = require('cross-fetch');

const client = new ApolloClient({
  link: new HttpLink({ uri: 'l', fetch }),
  cache: new InMemoryCache(),
});

module.exports = client;
