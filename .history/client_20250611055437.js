// client.js
const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client/core');
const { gql } = require('graphql-tag');

const fetch = require('cross-fetch');

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://test.api.shop.strackit.com/graphql', // your endpoint
    fetch,
  }),
  cache: new InMemoryCache(),
});

module.exports = client;
