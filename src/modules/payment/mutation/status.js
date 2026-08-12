import client, { gql } from '../../../utils/apolloClient.js';

const CHECK_PAYMENT_STATUS_MUTATION = gql`
  mutation CheckPaymentStatus($transactionId: String!, $phonePeId: String!, $phonePeKey: String!) {
    checkPaymentStatus(transactionId: $transactionId, phonePeId: $phonePeId, phonePeKey: $phonePeKey) {
      success
      message
      status
    }
  }
`;

export async function CHECK_PAYMENT_STATUS(transactionId, phonePeId, phonePeKey) {
  const { data } = await client.mutate({
    mutation: CHECK_PAYMENT_STATUS_MUTATION,
    variables: { transactionId, phonePeId, phonePeKey }
  });
  return data.checkPaymentStatus;
}
