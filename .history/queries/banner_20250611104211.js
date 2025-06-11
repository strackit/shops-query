import { gql } from ('graphql-tag');

// 🟡 QUERY

export const GET_BANNERS = gql`
  query GetBanners($filter: bannerFilterInput) {
    banners(filter: $filter) {
      id
      imageUrl
      link
      title
    }
  }
`;
