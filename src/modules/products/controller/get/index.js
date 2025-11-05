import { fetchProducts } from '../../queries/get.js';

export const getProductsController = async (shopId, categoryId) => {
  return await fetchProducts({ shopId, categoryId });
};

export const getProductByIdController = async (productId) => {
  return await fetchProducts({ productId, byProductId: false });
};

export const getProductByproductIdController = async (productId) => {
  return await fetchProducts({ productId, byProductId: true });
};

export default {
  getProductsController,
  getProductByIdController,
  getProductByproductIdController
};
