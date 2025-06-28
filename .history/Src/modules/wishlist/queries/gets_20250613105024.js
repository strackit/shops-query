import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const GET_WISHLIST = gql`
  query {
    wishlist {
      shopId
      userId
      productId
      shopId 
    }
  }
`;

export const fetchWishlist = async () => {
  try {
    const { data } = await client.query({
      query: GET_WISHLIST,
      fetchPolicy: 'no-cache',
    });
    return data.wishlist;
  } catch (error) {
    console.error('❌ Error fetching wishlist:', error.message || error);
    throw error;
  }
};
