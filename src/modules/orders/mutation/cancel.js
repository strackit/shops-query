import client, { gql } from '../../../utils/apolloClient.js';

export async function CANCEL_ORDER(orderId) {
    try {
        const { data } = await client.mutate({
            mutation: gql`
        mutation CancelOrder($orderId: Int) {
          cancelOrder(orderId: $orderId) {
            id
            voucherNo
            shopId
            orderType
            customerId
            customerName
            customerMobile
            customerAddress
            customerGstin
            userOrder
            pickuptime
            rating
            feedback
            paymentInfo
            masterId
            stockId
            quantity
            tax
            dnp
            discount
            price
            totalPrice
            status
            timestamp
            returned
          }
        }
      `,
            variables: { orderId }
        });
        return data.cancelOrder;
    } catch (error) {
        console.error('Error in CANCEL_ORDER:', error);
        throw error;
    }
}
