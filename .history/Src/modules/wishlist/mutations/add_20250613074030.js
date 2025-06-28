import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const ADD_TO_WISHLIST = gql`
  mutation AddToWishlist($productId: ID!) {
    addToWishlist(productId: $productId) {
      shopId
      userId
    }
  }
`;

export const addToWishlist = async (productId) => {
  try {
    const { data } = await client.mutate({
      mutation: ADD_TO_WISHLIST,
      variables: { productId },
    });
    return data.addToWishlist;
  } catch (error) {
    console.error('❌ Error adding to wishlist:', error.message || error);
    throw error;
  }
};
