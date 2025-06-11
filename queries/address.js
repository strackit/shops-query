const { gql } = require ('graphql-tag');

// 🟡 QUERIES

 const GET_ADDRESSES = gql`
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

 const GET_STATE_BY_PINCODE = gql`
  query GetState($filter: pincodeFilter) {
    getstate(filter: $filter) {
      state
      city
      region
    }
  }
`;

// 🟢 MUTATION

const CREATE_ADDRESS = gql`
  mutation CreateAddress($input: Address!) {
    Address(input: $input) {
      id
      city
      state
      pincode
    }
  }
`;


module.exports = {
  GET_ADDRESSES,
  GET_STATE_BY_PINCODE,
  CREATE_ADDRESS
};