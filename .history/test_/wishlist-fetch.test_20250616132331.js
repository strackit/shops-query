import graphqlModules from '../index.js';

export const wishlistFetchTest = async () => {
  try {
    const filter = { userId: 1 }; // Assuming your query expects an object with userId
    const data = await graphqlModules.fetchWishlist(filter);
    console.log('✅ Wishlist:', data);
  } catch (err) {
    console.error('❌ Wishlist Fetch Error:', err.message || err);
  }
};

// Auto-run
await wishlistFetchTest();
