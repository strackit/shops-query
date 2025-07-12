import { fetchProductsByPrice } from '../../queries/get.js';

export const getProductsByPriceController = async (shopId) => {
  try {
    const products = await fetchProductsByPrice({shopId , price });
    console.log(`Products based on shop id ${shopId} , ₹${price}:`, products);
    return products;
  } catch (error) {
    console.error('Controller failed to fetch products by price:', error);
  }
};
