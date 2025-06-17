import graphqlModules from '../index.js';

try {
  const data = await graphqlModules.wishlist.fetchWishlist(1);
  console.log('✅ Wishlist:', data);
} catch (err) {
  console.error('❌ Error:', err.message);
}