// src/modules/products/queries/getByPrice.js

import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_PRICE = gql`
  query ProductsByPrice($minPrice: Float!, $maxPrice: Float!) {
    productByPrice(minPrice: $minPrice, maxPrice: $maxPrice) {
      id
      name
      price
      size
    }
  }
`;

export const fetchProductsByPrice = async ({ minPrice, maxPrice }) => {
  try {
    const response = await client.query({
      query: GET_PRODUCTS_BY_PRICE,
      variables: {
        minPrice,
        maxPrice,
      },
    });

    return response?.data?.productByPrice ?? [];
  } catch (error) {
    console.error('❌ Error fetching products by price:', error.message || error);
    throw error;
  }
};