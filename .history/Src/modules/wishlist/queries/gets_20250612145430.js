import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const GET_WISHLIST = gql`
  query {
    wishlist {
      id
      productId
      addedAt
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
    console.error('❌ Error fetching wishlist:', error);
    throw error;
  }
};
