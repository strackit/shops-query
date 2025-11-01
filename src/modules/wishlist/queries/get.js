import client , {gql} from '../../../utils/apolloClient.js';

const getWishlistQuery = (shopId) => {
  const stockFields = shopId === 481 ? '' : `
    noStock
    minStock
  `;

  return gql`
  query Wishlist($filter: WishlistFilterInput) {
  wishlist(filter: $filter) {
    userId
    title
    tax
    shopId
    productId
    prize
        ${stockFields}
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
};

export const fetchWishlist = async (userId, shopid) => {
  try {
    const filter = { userId: Number(userId), shopId: Number(shopid) };
    const query = getWishlistQuery(shopid);
    
    const response = await client.query({
      query: query,
      variables: { filter },
    });
    return response?.data?.wishlist || [];
  } catch (error) {
    console.error('Error fetching wishlist:', error.message || error);
    throw error;
  }
};