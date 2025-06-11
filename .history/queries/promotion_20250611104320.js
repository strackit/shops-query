import { gql } from ('graphql-tag';

// 🟡 QUERIES

export const GET_COUPONS = gql`
  query GetCoupons($filter: couponFilter) {
    couponCode(filter: $filter) {
      code
      discount
      expiryDate
    }
  }
`;

export const GET_OFFER_PRODUCTS = gql`
  query GetOfferProducts($input: offer) {
    offerProducts(input: $input) {
      productId
      title
      discount
    }
  }
`;
