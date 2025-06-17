// src/modules/products/controller/get__/index.js

import client, { gql } from '../../../../utils/client.js';
import { GET_PRODUCTS_QUERY } from '../../queries/get.js';

export const getProductsController = async () => {
  const { data } = await client.query({
    query: GET_PRODUCTS_QUERY,
  });

  return data.products;
};
