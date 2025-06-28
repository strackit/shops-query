// src/queries/get.js

import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($filter: CategoryWiseFilter) {
    productsByCategory(filter: $filter) {
      productId
      name
      prize
      description
      categoryId
      productCategoryId
      shopId
      quantity { quantity }
      productImage {
        productId
        image
        id
      }
      // Add other fields you use
    }
  }
`;

export const fetchProductsByCategory = async (productCategoryId, shopId) => {
  try {
    const { data } = await client.query({
      query: PRODUCTS_BY_CATEGORY,
      variables: {
        filter: {
          productCategoryId: Number(productCategoryId),
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
