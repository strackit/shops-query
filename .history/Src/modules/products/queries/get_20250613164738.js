import ApolloClient from ''../../
import { gql } from '../../../utils/client.js';

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProduct($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      CategoryId
      masterCategoryId
      productId
      shopId 
      userId 
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
    console.error(' Error updating product:', error.message || error);
    throw error;
  }
};
