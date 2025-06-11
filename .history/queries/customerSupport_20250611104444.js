const { gql } = require ('graphql-tag');

// 🟡 QUERY

export const GET_CUSTOMER_MESSAGES = gql`
  query GetCustomerMessages {
    customerMessages {
      id
      userId
      subject
      message
      status
    }
  }
`;

// 🟢 MUTATION

export const CREATE_CUSTOMER_MESSAGE = gql`
  mutation CreateCustomerMessage($input: message!) {
    CustomerMessage(input: $input) {
      id
      status
      response
    }
  }
`;
