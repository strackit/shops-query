import { fetchProductsByPrice } from '../../queries/get.js';

export const getProductsByPriceController = async (shopId,price) => {
  try {
    const products = await fetchProductsByPrice({shopId , prize });
    console.log(`Products based on shop id ${shopId} , ₹${price}:`, products);
    return products;
  } catch (error) {
    console.error('Controller failed to fetch products by price:', error);
  }
};
