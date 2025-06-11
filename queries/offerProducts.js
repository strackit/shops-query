const { gql } = require('graphql-tag');

const OFFER_PRODUCTS_QUERY = gql`
  query {
    offerProducts {
      id
      name
      discount
    }
  }
`;

module.exports = OFFER_PRODUCTS_QUERY;
