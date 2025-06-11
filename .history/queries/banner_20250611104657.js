const { gql } = require ('graphql-tag');
// 🟡 QUERY

moduleexport const GET_BANNERS = gql`
  query GetBanners($filter: bannerFilterInput) {
    banners(filter: $filter) {
      id
      imageUrl
      link
      title
    }
  }
`;
