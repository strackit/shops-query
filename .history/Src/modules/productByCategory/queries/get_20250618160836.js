// src/modules/productsByCategory/queries/get.js
import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($filter: CategoryWiseFilter) {
    productsByCategory(filter: $filter) {
      id
      name
      categoryId
      category
      shopId
      prize
      description
      featureImage
      productId
      productImage {
        productId
        image
        id
      }
      Specifications {
        value
        specification
      }
      quantity {
        quantity
      }
      wishList {
        like
      }
      isAddedToCart {
        inCart
      }
      publish
      views
      viewPrice
      discount
      tax
    }
  }
`;

export const fetchProductsByCategory = async (shopId) => {
  try {
    const { data } = await client.query({
      query: PRODUCTS_BY_CATEGORY,
      variables: {
        filter: {
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
