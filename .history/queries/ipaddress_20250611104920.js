const { gql } = require ('graphql-tag');

 const GET_IP_ADDRESS = gql`
  query GetIpAddress {
    getIpAddress {
      ip
      location
      provider
    }
  }
`;

