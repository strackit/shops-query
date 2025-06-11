const { gql } = require('graphql-tag');

const PRODUCTS_QUERY = gql`
  query Products($filter: ProductFilterInput) {
    products  {
      id
      name
      price
      discount
      images {
        url
        alt
      }
      specifications {
        key
        value
      }
    }
  }
`;

module.exports = PRODUCTS_QUERY;
