import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProduct($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      price
      category
      size
    }
  }
`;

export const updateProduct = async (id, input) => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_PRODUCT_MUTATION,
      variables: { id, input },
    });
    return data.updateProduct;
  } catch (error) {
    console.error('❌ Error updating product:', error);
    throw error;
  }
};
