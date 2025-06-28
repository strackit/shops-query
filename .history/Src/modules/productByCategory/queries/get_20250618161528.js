import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($filter: CategoryWiseFilter) {
    productsByCategory(filter: $filter) {
      id
      name
      prize
      productCategoryId
      shopId
      featureImage
      // Add other fields you need
    }
  }
`;

export const fetchProductsByCategory = async (productCategoryId, shopId) => {
  try {
    const { data } = await client.query({
      query: PRODUCTS_BY_CATEGORY,
      variables: {
        filter: {
          shopId: Number(shopId),
          productCategoryId: Number(productCategoryId), // ✅ Corrected
        },
      },
    });

    return data.productsByCategory;
  } catch (error) {
    console.error('❌ Error fetching products by category:', error.message || error);
    throw error;
  }
};
