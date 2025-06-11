import { gql } from ('graphql-tag';

export const GET_CMS_CONTENT = gql`
  query GetCMSContent {
    CMS {
      id
      title
      content
      page
      updatedAt
    }
  }
`;

export const GET_SITE_CONFIG = gql`
  query GetSiteConfig {
    siteConfig {
      currency
      language
      theme
    }
  }
`;
