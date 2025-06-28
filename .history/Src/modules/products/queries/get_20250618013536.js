import client, { gql } from '../../../utils/client.js';

export const GET_PRODUCTS = gql`
  query GetProducts($filter: productFilter) {
    products(filter: $filter) {
      id
      name
      price
      discount
      shopId
    }
  }
`;

export const fetchProducts = async (shopId) => {
  try {
    const response = await client.query({
      query: GET_PRODUCTS,
      variables: {
        filter: {
          shopId: Number(shopId),
        },
      },
    });

    return response?.data?.products ?? [];
  } catch (error) {
    console.error('Failed to fetch products:', error.message || error);
    return [];
  }
};
