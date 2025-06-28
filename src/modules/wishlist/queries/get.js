import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const GET_WISHLIST = gql`
  query Wishlist($filter: WishlistFilterInput) {
  wishlist(filter: $filter) {
    userId
    title
    tax
    shopId
    productId
    prize
    noStock
    minStock
    mastercategory
    id
    hsnCode
    featureImage
    discount
    description
    category
  }
}
`;

export const fetchWishlist = async (userId) => {
  try {
    const filter = { userId: Number(userId) }; // make sure it's userId, not user_id
    const response = await client.query({
      query: GET_WISHLIST,
      variables: { filter },
    });
    return response?.data?.wishlist || [];
  } catch (error) {
    console.error('Error fetching wishlist:', error.message || error);
    throw error;
  }
};