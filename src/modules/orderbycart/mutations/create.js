import client, { gql } from '../../../utils/apolloClient.js';

export const ORDER_BY_CART = gql`
  mutation OrderbyCart(
    $userId: Int
    $shopId: Int
    $voucherNo: String
    $orderType: String
    $customerId: Int
    $customerName: String
    $customerMobile: String
    $customerAddress: String
    $pickuptime: DateTime
    $feedback: String
    $shopPhone: String
    $rating: Int
    $billingAddress: Int
    $shippingAddress: Int
    $couponId: Int
  ) {
    OrderbyCart(
      userId: $userId
      shopId: $shopId
      voucherNo: $voucherNo
      orderType: $orderType
      customerId: $customerId
      customerName: $customerName
      customerMobile: $customerMobile
      customerAddress: $customerAddress
      pickuptime: $pickuptime
      feedback: $feedback
      shopPhone: $shopPhone
      rating: $rating
      billingAddress: $billingAddress
      shippingAddress: $shippingAddress
      couponId: $couponId
    ) {
      id
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
      billingAddress
      shippingAddress
    }
  }
`;

export async function createOrderByCart(variables) {
    try {
        const { data } = await client.mutate({
            mutation: ORDER_BY_CART,
            variables,
        });
        return data.OrderbyCart;
    } catch (error) {
        console.error('Error in createOrderByCart:', error);
        throw error;
    }
}
