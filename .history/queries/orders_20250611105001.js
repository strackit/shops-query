const { gql } = require ('graphql-tag');

// 🟡 QUERIES
 const GET_ORDERS = gql`
  query GetOrders($filter: orderFilter) {
    orders(filter: $filter) {
      id
      userId
      status
      totalAmount
      createdAt
    }
  }
`;

 const GET_ORDER_HISTORY = gql`
  query OrderHistory($userId: Int!) {
    orderHistory(userId: $userId) {
      id
      status
      totalAmount
      orderedAt
    }
  }
`;

 const GET_ORDER_MASTER = gql`
  query GetOrderMaster($id: Int!) {
    orderMaster(id: $id) {
      id
      items {
        name
        quantity
        price
      }
      paymentStatus
    }
  }
`;
 const GET_USER_ORDER_DETAILS = gql`
  query UserOrderDetails($orderId: Int!) {
    userOrderDetails(orderId: $orderId) {
      product
      quantity
      shippingAddress
      deliveryStatus
    }
  }
`;

// 🟢 MUTATIONS

 const PLACE_ORDER = gql`
  mutation PlaceOrder($input: orders!) {
    Order(input: $input) {
      id
      status
      createdAt
    }
  }
`;

const ORDER_BY_CART = gql`
  mutation OrderByCart($userId: Int!) {
    OrderbyCart(userId: $userId) {
      id
      status
      cartItems {
        name
        price
        quantity
      }
    }
  }
`;

const CANCEL_ORDER = gql`
  mutation CancelOrder($orderId: Int!) {
    cancelOrder(orderId: $orderId) {
      success
      message
    }
  }
`;
