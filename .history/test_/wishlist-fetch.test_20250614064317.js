import graphqlModules from '../index.js';

export const wishlistFetchTest = async () => {
  try {
    const data = await graphqlModules.wishlist.fetchWishlist(1);
    console.log('Wishlist:', data);
  } catch (err) {
    console.error('Wishlist Fetch Error:', err);
  }
};


