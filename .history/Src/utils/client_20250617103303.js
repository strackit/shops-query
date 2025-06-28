import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient('https://test.api.shop.strackit.com/graphql');

export default client;
export { gql };
