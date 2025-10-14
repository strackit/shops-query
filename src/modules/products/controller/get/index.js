import { fetchProducts } from '../../queries/get.js';

export const getProductsController = async (shopId, categoryId) => {
  return await fetchProducts({ shopId, categoryId });
};

export const getProductByIdController = async (productId) => {
  return await fetchProducts({ productId });
};

export default {
  getProductsController,
  getProductByIdController
};