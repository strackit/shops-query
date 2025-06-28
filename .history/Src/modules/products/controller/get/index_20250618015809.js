import { fetchProducts } from '../../queries/get.js';

export const getProductsController = async ($userId) => {
  if (!$userId) {
    console.error('❌ Please provide a userId to Query');
    return [];
  }

  try {
    const products = await fetchProducts(userId);
    console.log('✅ Fetched Products:', products);
    return products;
  } catch (error) {
    console.error('❌ Failed to fetch products:', error.message || error);
    return [];
  }
};

export default getProductsController;
