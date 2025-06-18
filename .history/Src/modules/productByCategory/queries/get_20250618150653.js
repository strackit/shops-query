import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($filter: ProductFilterInput) {
    productsByCategory(filter: $filter) {
      id
      name
      categoryId
      shopId
      prize
      productImage {
        image
      }
    }
  }
`;

export const fetchProductsByCategory = async (categoryId, shopId) => {
  try {
    const { data } = await client.query({
      query: PRODUCTS_BY_CATEGORY,
      variables: {
        filter: {
          categoryId: Number(categoryId),
          shopId: Number(shopId),
        },
      },
    });

    return data.productsByCategory;
  } catch (error) {
    console.error('❌ Error fetching products by category:', error.message || error);
    throw error;
  }
};
