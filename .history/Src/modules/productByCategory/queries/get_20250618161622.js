// src/queries/get.js

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
      discount
      viewPrice
      isOnline
      productImage {
        id
        image
        productId
      }
      quantity {
        quantity
      }
      Specifications {
        specification
        value
      }
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
          productCategoryId: Number(productCategoryId),
        },
      },
    });

    return data.productsByCategory;
  } catch (error) {
    console.error('❌ Error fetching products by category:', error.message || error);
    throw error;
  }
};
