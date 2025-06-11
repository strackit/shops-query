const { gql } = require ('graphql-tag');

// 🟡 QUERIES

export const GET_ADDRESSES = gql`
  query GetAddresses($filter: addressFilter) {
    address(filter: $filter) {
      id
      userId
      street
      city
      state
      pincode
      country
    }
  }
`;

export const GET_STATE_BY_PINCODE = gql`
  query GetState($filter: pincodeFilter) {
    getstate(filter: $filter) {
      state
      city
      region
    }
  }
`;

// 🟢 MUTATION

export const CREATE_ADDRESS = gql`
  mutation CreateAddress($input: Address!) {
    Address(input: $input) {
      id
      city
      state
      pincode
    }
  }
`;
