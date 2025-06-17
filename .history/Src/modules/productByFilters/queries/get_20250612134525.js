// src/modules/productByFilters/queries/get.js
import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_FILTERS = `
  query ProductsByFilters($filters: ProductFilterInput) {
    productByFilters(filters: $filters) {
      id
      name
      size
      price
      category
    }
  }
`;

export const fetchProductsByFilters = async (filters) => {
  try {
    const variables = { filters };
    const data = await client.request(GET_PRODUCTS_BY_FILTERS, variables);
    return data.productByFilters;
  } catch (error) {
    console.error('❌ Error fetching products by filters:', error);
    throw error;
  }
};
