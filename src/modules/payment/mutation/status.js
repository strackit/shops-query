import client , { gql } from '../../../utils/apolloClient.js';

const CHECK_PAYMENT_STATUS_MUTATION = gql`
  mutation CheckPaymentStatus($orderId: Int!) {
    checkPaymentStatus(orderId: $orderId) {
      success
      message
      status
    }
  }
`;

export async function CHECK_PAYMENT_STATUS(orderId) {
  const { data } = await client.mutate({
    mutation: CHECK_PAYMENT_STATUS,
    variables: { orderId }
  });
  return data.checkPaymentStatus;
}
