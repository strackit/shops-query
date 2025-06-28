import client from '../../../utils/client.js';

const ADD_TO_WISHLIST = `
  mutation AddToWishlist($productId: ID!) {
    addToWishlist(productId: $productId) {
      id
      productId
      addedAt
    }
  }
`;

export const addToWishlist = async (productId) => {
  const data = await client.request(ADD_TO_WISHLIST, { productId });
  return data.addToWishlist;
};
