import { fetchProducts } from '../../queries/get.js';

export const getProductsController = async (filters = {}) => {
  try {
    const products = await fetchProducts(filters);
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error.message || error);
    throw new Error('Product fetch failed');
  }
};
