import client from '../../../utils/client.js';

const GET_WISHLIST = `
  query {
    wishlist {
      id
      productId
      addedAt
    }
  }
`;

export const fetchWishlist = async () => {
  const data = await client.request(GET_WISHLIST);
  return data.wishlist;
};
