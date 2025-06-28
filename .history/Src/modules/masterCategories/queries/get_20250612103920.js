import { request, gql } from 'graphql-request';

const ENDPOINT = 'https://test.api.shop.strackit.com/graphql';

const GET_MASTER_CATEGORIES = gql`
  query {
    masterCategories {
      id
      title
    }
  }
`;

export const getMasterCategories = async () => {
  try {
    const data = await request(ENDPOINT, GET_MASTER_CATEGORIES);
    return data.masterCategories;
  } catch (error) {
    console.error('Error fetching master categories:', error);
    throw error;
  }
};
