import { fetchTopProducts } from '../queries/get.js';

export const getTopProductsController = async () => {
  try {
    const topProducts = await fetchTopProducts();
    console.log('🔥 Top Products:', topProducts);
    return topProducts;
  } catch (error) {
    console.error('❌ Controller failed to fetch top products:', error.message || error);
    throw error; // Optional: propagate the error
  }
};
