import client from '../../../utils/client.js';

const REMOVE_FROM_WISHLIST = `
  mutation RemoveFromWishlist($id: ID!) {
    removeFromWishlist(id: $id) {
      success
    }
  }
`;

export const removeFromWishlist = async (id) => {
  const data = await client.request(REMOVE_FROM_WISHLIST, { id });
  return data.removeFromWishlist;
};
