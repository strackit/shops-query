import client, { gql } from '../../../utils/apolloClient.js';

export async function CONFIRM_ONLINE_ORDER(orderId, paymentInfo, userId, shopId) {
    try {
        const { data } = await client.mutate({
            mutation: gql`
        mutation ConfirmOnlineOrder($orderId: Int!, $paymentInfo: String!, $userId: Int!, $shopId: Int!) {
          confirmOnlineOrder(orderId: $orderId, paymentInfo: $paymentInfo, userId: $userId, shopId: $shopId) {
            id
            masterId
            status
          }
        }
      `,
            variables: { orderId, paymentInfo, userId, shopId }
        });
        return data.confirmOnlineOrder;
    } catch (error) {
        console.error('Error in CONFIRM_ONLINE_ORDER:', error);
        throw error;
    }
}
