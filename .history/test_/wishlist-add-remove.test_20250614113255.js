import   addToWishlistController from '../index.js';
import   removeFromWishlistController from '../remove-from-wishlist.js';
/**
 * Runs a test for adding and removing items from wishlist.
 */
export const wishlistAddRemoveTest = async () => {
  console.log('\n Wishlist Add & Remove Test');

  try {
    // Step 1: Add to Wishlist
    const added = await addToWishlistController(1, 1);
    console.log(' Wishlist Add:', added);

    // Step 2: Remove from Wishlist
    const removed = await removeFromWishlistController(1, 1);
    console.log(' Wishlist Remove:', removed);
  } catch (err) {
    console.error(' Wishlist Add/Remove Error:', err.message || err);
  }
};

// Auto-run
await wishlistAddRemoveTest();
