import client from '../../../utils/client';
import { gql } from '../../../utils/client';

const GET_TOP_PRODUCTS = gql`
  query {
    topProducts {
      CategoryId
      masterCategoryId
      productId
      shopId 
      userId
    }
  }
`;

export const fetchTopProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_TOP_PRODUCTS,
    });
    return data.topProducts;
  } catch (error) {
    console.error('❌ Error fetching top products:', error.message || error);
    throw error;
  }
};