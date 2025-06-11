import { gql } from ('graphql-tag');

export const GET_IP_ADDRESS = gql`
  query GetIpAddress {
    getIpAddress {
      ip
      location
      provider
    }
  }
`;
