import { request, gql } from 'graphql-request';

const ENDPOINT = 'https://test.api.shop.strackit.com/graphql';

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`;

export const getCategories = async () => {
  try {
    const data = await request(ENDPOINT, GET_CATEGORIES);
    return data.categories;
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    throw error;
  }
};
