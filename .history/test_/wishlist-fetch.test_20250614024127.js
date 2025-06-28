import graphqlModules from '../index.js';

export const wishlistFetchTest = async () => {
  const userId = 1;

  try {
    const data = await graphqlModules.wishlist.fetchWishlist(userId);

    if (data && data.length > 0) {
      console.log('Wishlist Items:', JSON.stringify(data, null, 2));
    } else {
      console.log('Wishlist is empty or no items found.');
    }

    return data;
  } catch (err) {
    console.error('Wishlist Fetch Error:', err);
    return null;
  }
};

// wishlistFetchTest(); // Uncomment to run directly
