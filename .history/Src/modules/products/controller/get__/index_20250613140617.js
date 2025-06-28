import { fetchProducts } from '../../queries/get.js';

const getProductsController = async () => {
  try {
    const products = await fetchProducts();
    console.log('📦 Products:', products);
    return products;
  } catch (error) {
    console.error('❌ Controller failed to fetch products:', error.message || error);
    throw error; // Optional: rethrow for upstream handling
  }
};

export default getProductsController;