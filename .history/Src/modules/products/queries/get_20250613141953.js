import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

exportconst GET_PRODUCTS = gql`
  query {
    products {
      CategoryId
      masterCategoryId
      productId
      shopId 
      userId 
    }
  }
`;

export const fetchProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS,
      fetchPolicy: 'no-cache', // Optional: useful in dev or to prevent stale data
    });
    return data.products;
  } catch (error) {
    console.error(' Error fetching products:', error.message || error);
    throw error;
  }
};
