import { fetchProductsByPrice } from '../../queries/get.js';

export const getProductsByPriceController = async (price, shopId, userId) => {
  try {
    const products = await fetchProductsByPrice(price, shopId, userId);
    return products;
  } catch (error) {
    console.error('Controller failed to fetch products by price:', error);
  }
};
