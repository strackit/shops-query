import { fetchProducts } from '../../queries/get.js';

export const getProductsController = async (shopId) => {
  if (!shopId) {
    console.error('❌ Please provide a shopId to Query');
    return [];
  }

  try {
    const products = await fetchProducts(shopId);
    console.log('✅ Fetched Products:', products);
    return products;
  } catch (error) {
    console.error('❌ Failed to fetch products:', error.message || error);
    return [];
  }
};

export default getProductsController;
