import client from '../../../utils/client.js';

const UPDATE_PRODUCT_MUTATION = `
  mutation UpdateProduct($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      price
    }
  }
`;

export const updateProduct = async (id, input) => {
  try {
    const variables = { id, input };
    const data = await client.request(UPDATE_PRODUCT_MUTATION, variables);
    return data.updateProduct;
  } catch (error) {
    console.error('❌ Error updating product:', error);
    throw error;
  }
};
