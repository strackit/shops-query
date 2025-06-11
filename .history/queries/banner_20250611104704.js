const { gql } = require ('graphql-tag');
// 🟡 QUERY

module.export GET_BANNERS = gql`
  query GetBanners($filter: bannerFilterInput) {
    banners(filter: $filter) {
      id
      imageUrl
      link
      title
    }
  }
`;
