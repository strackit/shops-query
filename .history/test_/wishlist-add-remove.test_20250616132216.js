import graphqlModules from '../index.js';

/**
 * Runs a test for adding and removing items from wishlist.
 */
export const wishlistAddRemoveTest = async () => {
  console.log('\n🧪 Wishlist Add & Remove Test');

  try {
    // Step 1: Add to Wishlist
    const added = await graphqlModules.addToWishlistController(1, 1);
    console.log('✅ Wishlist Add:', added);

    // Step 2: Remove from Wishlist
    const removed = await graphqlModules.removeFromWishlistController(1, 1);
    console.log('✅ Wishlist Remove:', removed);
  } catch (err) {
    console.error('❌ Wishlist Add/Remove Error:', err.message || err);
  }
};

// Auto-run
await wishlistAddRemoveTest();
