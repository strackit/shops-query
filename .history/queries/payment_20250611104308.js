import { gql } from ('graphql-tag';

// 🟢 MUTATIONS

export const INITIATE_PAYMENT = gql`
  mutation InitiatePayment($amount: Float!, $userId: Int!) {
    initiatePayment(amount: $amount, userId: $userId) {
      status
      transactionId
      redirectUrl
    }
  }
`;

export const CHECK_PAYMENT_STATUS = gql`
  mutation CheckPaymentStatus($transactionId: String!) {
    checkPaymentStatus(transactionId: $transactionId) {
      success
      message
      status
    }
  }
`;
