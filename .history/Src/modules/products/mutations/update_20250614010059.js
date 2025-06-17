import client from "../../../utils/client';
import { gql } from '../../../utils/client'
export const GET_PRODUCTS = gql`
  query GetProducts($filter: ProductFilter) {
    products(filter: $filter) {
      CategoryId
      masterCategoryId
      productId
      shopId
      userId
    }
  }
`;

// Then in the function:
export const fetchProducts = async (filter) => {
  const { data } = await client.query({
    query: GET_PRODUCTS,
    variables: { filter },
  });
  return data.products;
};
