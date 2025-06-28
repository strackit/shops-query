// src/modules/productByCategory/queries/get.js
import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_CATEGORY = `
  query ProductsByCategory($category: String!) {
    productsByCategory(category: $category) {
      id
      name
      size
      price
      category
    }
  }
`;

export const fetchProductsByCategory = async (category) => {
  try {
    const variables = { category };
    const data = await client.request(GET_PRODUCTS_BY_CATEGORY, variables);
    return data.productsByCategory;
  } catch (error) {
    console.error('❌ Error fetching products by category:', error);
    throw error;
  }
};
