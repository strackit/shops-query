const { gql } = require ('graphql-tag');

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

 const GET_SITE_CONFIG = gql`
  query GetSiteConfig {
    siteConfig {
      currency
      language
      theme
    }
  }
`;
