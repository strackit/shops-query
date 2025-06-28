import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const REMOVE_FROM_WISHLIST = gql`
  mutation RemoveFromWishlist($id: ID!) {
    removeFromWishlist(id: $id) {
      shopId
      userId
    }
  }
`;

export const removeFromWishlist = async (id) => {
  try {
    const { data } = await client.mutate({
      mutation: REMOVE_FROM_WISHLIST,
      variables: { id },
    });
    return data.removeFromWishlist;
  } catch (error) {
    console.error('❌ Error removing from wishlist:', error);
    throw error;
  }
};
