import { fetchProductsByPrice } from '../../queries/get__.js';

export const getProductsByPriceController = async (minPrice, maxPrice) => {
  try {
    const products = await fetchProductsByPrice({ minPrice, maxPrice });
    console.log(` Products priced between ₹${minPrice} - ₹${maxPrice}:1`, products);
    return products;
  } catch (error) {
    console.error('❌ Controller failed to fetch products by price:', error);
  }
};