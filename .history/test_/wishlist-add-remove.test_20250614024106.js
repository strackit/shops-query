import graphqlModules from '../index.js';

export const wishlistAddRemoveTest = async () => {
  const userId = 1;
  const productId = 1;

  try {
    const added = await graphqlModules.wishlist.addToWishlistController(userId, productId);
    console.log('Wishlist Add Result:', JSON.stringify(added, null, 2));

    const removed = await graphqlModules.wishlist.removeFromWishlistController(userId, productId);
    console.log('Wishlist Remove Result:', JSON.stringify(removed, null, 2));

    return { added, removed };
  } catch (err) {
    console.error('Wishlist Add/Remove Error:', err);
    return null;
  }
};

// wishlistAddRemoveTest(); // Uncomment to run directly
