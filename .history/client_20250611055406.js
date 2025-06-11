// client.js
const { ApolloClient, InMemoryCache, HttpLink } = require('graphe');
const { gql } = require('@apollo/client/core');

const fetch = require('cross-fetch');

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql', // your endpoint
    fetch,
  }),
  cache: new InMemoryCache(),
});

module.exports = client;
