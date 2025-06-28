import client from '../../../utils/client.js';

const GET_PRODUCTS_QUERY = `
  query {
    products {
      id
      name
      price
    }
  }
`;

export const fetchProducts = async () => {
  try {
    const data = await client.request(GET_PRODUCTS_QUERY);
    return data.products;
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    throw error;
  }
};
