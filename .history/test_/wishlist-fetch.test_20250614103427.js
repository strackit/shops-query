import { fetchWishlist } from '../index.js';

export const wishlistFetchTest = async () => {
  try {
    const data = await fetchWishlist(1);
    console.log('Wishlist:', data);
  } catch (err) {
    console.error('Wishlist Fetch Error:', err.message || err);
  }
};

// Auto-run
await wishlistFetchTest();
