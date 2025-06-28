import graphqlModules from '../index.js';


export const
try {
  const added = await graphqlModules.wishlist.addToWishlistController(1, 1);
  console.log('✅ Wishlist Add:', added);

  const removed = await graphqlModules.wishlist.removeFromWishlistController(1, 1);
  console.log('✅ Wishlist Remove:', removed);
} catch (err) {
  console.error('❌ Error:', err.message);
}