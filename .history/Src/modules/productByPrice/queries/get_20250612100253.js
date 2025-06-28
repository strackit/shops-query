import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_PRICE = `
  query ProductsByPrice($minPrice: Float!, $maxPrice: Float!) {
    productByPrice(minPrice: $minPrice, maxPrice: $maxPrice) {
      id
      name
      price
      size
    }
  }
`;

export const fetchProductsByPrice = async ({ minPrice, maxPrice }) => {
  try {
    const variables = { minPrice, maxPrice };
    const data = await client.request(GET_PRODUCTS_BY_PRICE, variables);
    return data.productByPrice;
  } catch (error) {
    console.error('❌ Error fetching products by price:', error);
    throw error;
  }
};
