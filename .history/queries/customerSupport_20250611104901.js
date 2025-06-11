const { gql } = require ('graphql-tag');

// 🟡 QUERY

 const GET_CUSTOMER_MESSAGES = gql`
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

 const CREATE_CUSTOMER_MESSAGE = gql`
  mutation CreateCustomerMessage($input: message!) {
    CustomerMessage(input: $input) {
      id
      status
      response
    }
  }
`;
