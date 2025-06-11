const { gql } = require ('graphql-tag');

// 🟡 QUERIES
 const GET_COUPONS = gql`
  query GetCoupons($filter: couponFilter) {
    couponCode(filter: $filter) {
      code
      discount
      expiryDate
    }
  }
`;

 const GET_OFFER_PRODUCTS = gql`
  query GetOfferProducts($input: offer) {
    offerProducts(input: $input) {
      productId
      title
      discount
    }
  }
`;



module