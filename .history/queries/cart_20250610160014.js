const { gql } = require('graph');

const CART_QUERY = gql`
  query {
    cart {
      productId
      quantity
      totalPrice
    }
  }
`;

module.exports = CART_QUERY;
