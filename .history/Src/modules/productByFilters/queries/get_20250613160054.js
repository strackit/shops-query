import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_FILTERS = gql`
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
  const { data } = await client.query({
    query: GET_PRODUCTS_BY_FILTERS,
    variables: { filters },          // { filters: { category: 'Skincare', … } }
  });
  return data.productByFilters;
};