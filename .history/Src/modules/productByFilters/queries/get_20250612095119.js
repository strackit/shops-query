import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_FILTERS = `
  query ProductsByFilter($filter: ProductFilterInput!) {
    productByFilters(filter: $filter) {
      id
      name
      size
      price
      category
    }
  }
`;

export const fetchFilteredProducts = async (filter) => {
  try {
    const variables = { filter };
    const data = await client.request(GET_PRODUCTS_BY_FILTERS, variables);
    return data.productByFilters;
  } catch (error) {
    console.error('❌ Error fetching filtered products:', error);
    throw error;
  }
};
