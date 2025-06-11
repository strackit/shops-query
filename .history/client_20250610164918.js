// client.js
const client = require('./client');
const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client/core');
const fetch = require('cross-fetch');

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://test.api.shop.strackit.com/graphql', fetch }),
  cache: new InMemoryCache(),
});

module.exports = client;
