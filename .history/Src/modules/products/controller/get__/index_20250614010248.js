import {  }  from '../../queries/get.js';

export const getProductsController = async () => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS,
    });
    return data.products;
  } catch (error) {
    console.error("❌ Failed to fetch products:", error.message || error);
    throw error;
  }
};
