// src/modules/products/mutations/update.js
import  client  from '../../../utils/client.js';
import {gql} from '../../../utils/client.js';

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProduct($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      CategoryId
      masterCategoryId
      productId
      shopId 
      userId 
    }import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

export const GET_PRODUCTS = gql`
  query: GetProducts($filter: ProductFilter) {
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

  }
`;

export const updateProduct = async (id, input) => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_PRODUCT_MUTATION,
      variables: { id, input },
    });

    return data?.updateProduct;
  } catch (error) {
    console.error('❌ Error updating product:', error.message || error);
    throw error;
  }
};
