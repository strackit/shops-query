import { request, gql } from 'graphql-request';

const ENDPOINT = 'https://test.api.shop.strackit.com/graphql';

const GET_NESTED_CATEGORY = gql`
  query {
    nestedCategory {
      id
      name
      children {
        id
        name
      }
    }
  }
`;

export const getNestedCategory = async () => {
  try {
    const data = await request(ENDPOINT, GET_NESTED_CATEGORY);
    return data.nestedCategory;
  } catch (error) {
    console.error('Error fetching nested category:', error);
    throw error;
  }
};
