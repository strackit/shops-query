import {gql, client } from '../../../ut'

export const GET_CART = gql`
query Cart($filter: CartFilter1) {
  cart(filter: $filter) {
    productId
    quantity
    name
    shopId
    prize
    Discount
    featureImage
    userId
    description
    mastercategory
    tax
    id
  }
}
`;
