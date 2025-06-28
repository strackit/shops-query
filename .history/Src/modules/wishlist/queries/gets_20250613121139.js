import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const GET_WISHLIST = gql`
  query Wishlist($filter: WishlistFilterInput) {
    wishlist(filter: $filter) {
      featureImage
      title
      prize
      tax
      discount
      productId
      id
      shopId
    }
  }
`;

export const fetchWishlist = async (filter = {}) => {
  try {
    const { data } = await client.query({
      query: GET_WISHLIST,
      variables: { filter },
    });
    return data.wishlist;
  } catch (error) {
    console.error('❌ Error fetching wishlist:', error.message || error);
    throw error;
  }
};
