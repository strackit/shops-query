const { gql } = require ('graphql-tag');

// 🟢 MUTATIONS

const INITIATE_PAYMENT = gql`
  mutation InitiatePayment($amount: Float!, $userId: Int!) {
    initiatePayment(amount: $amount, userId: $userId) {
      status
      transactionId
      redirectUrl
    }
  }
`;
const CHECK_PAYMENT_STATUS = gql`
  mutation CheckPaymentStatus($transactionId: String!) {
    checkPaymentStatus(transactionId: $transactionId) {
      success
      message
      status
    }
  }
`;


module.exports = {
  INITIATE_PAYMENT,
  CHECK_PAYMENT_STATUS
};