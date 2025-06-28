// src/modules/orders/queries/get.js
import { gql, client } from '../../../utils/apolloClient.js';

const GET_ORDER_HISTORY = gql`
  query GetOrderHistory {
    orderHistory {
      id
      voucherNo
      customerName
      paymentInfo
      timestamp
    }
  }
`;

export async function GET_ORDERS() {
  const { data } = await client.query({
    query: GET_ORDER_HISTORY,
    fetchPolicy: 'no-cache',
  });
  return data.orderHistory;
}
