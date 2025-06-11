const { gql } = require ('graphql-tag');
export const GET_SHOP = gql`
  query GetShop($id: Int!) {
    shop(id: $id) {
      id
      name
      location
      owner
      email
    }
  }
`;

export const GET_SITE_CONFIG = gql`
  query GetSiteConfig {
    siteConfig {
      theme
      currency
      language
    }
  }
`;

export const CREATE_SHOP = gql`
  mutation CreateShop($input: ShopInput!) {
    createShop(input: $input) {
      id
      name
      email
    }
  }
`;
